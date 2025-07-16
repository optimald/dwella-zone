import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { 
  ConfiguratorQuestion, 
  DevicePack, 
  Plan, 
  UserConfiguration,
  configuratorQuestions,
  devicePacks,
  basePlans,
  recommendationLogic
} from '@/lib/configurator/schema';

interface ConfiguratorState {
  // Current state
  currentQuestionIndex: number;
  answers: Record<string, string | string[]>;
  tags: string[];
  selectedPlan?: string;
  selectedPacks: string[];
  
  // Computed values
  totalMonthlyPrice: number;
  totalInstallPrice: number;
  estimatedInstallTime: string;
  
  // UI state
  isLoading: boolean;
  showSummary: boolean;
  
  // Actions
  setAnswer: (questionId: string, answer: string | string[]) => void;
  setMultipleAnswers: (questionId: string, answers: string[]) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  goToQuestion: (index: number) => void;
  resetConfigurator: () => void;
  selectPlan: (planId: string) => void;
  selectPack: (packId: string) => void;
  deselectPack: (packId: string) => void;
  setShowSummary: (show: boolean) => void;
  
  // Computed getters
  getCurrentQuestion: () => ConfiguratorQuestion | null;
  getRecommendedPlan: () => Plan | null;
  getRecommendedPacks: () => DevicePack[];
  getConfiguration: () => UserConfiguration;
}

// Helper function to collect tags from answers
const collectTags = (answers: Record<string, string | string[]>): string[] => {
  const tags: string[] = [];
  
  Object.entries(answers).forEach(([questionId, answer]) => {
    const question = configuratorQuestions.find(q => q.id === questionId);
    if (!question) return;
    
    if (Array.isArray(answer)) {
      // Multiple choice
      answer.forEach((optionId: string) => {
        const option = question.options?.find(o => o.id === optionId);
        if (option) {
          tags.push(...option.tags);
        }
      });
    } else if (typeof answer === 'string') {
      // Single choice
      const option = question.options?.find(o => o.id === answer);
      if (option) {
        tags.push(...option.tags);
      }
    }
  });
  
  return [...new Set(tags)]; // Remove duplicates
};

// Helper function to get recommended plan based on tags
const getRecommendedPlan = (tags: string[]): Plan | null => {
  const { planRecommendations } = recommendationLogic;
  
  // Count matches for each plan
  const planScores = Object.entries(planRecommendations).map(([planId, planTags]) => {
    const matches = planTags.filter(tag => tags.includes(tag)).length;
    return { planId, matches };
  });
  
  // Sort by matches and return the best match
  planScores.sort((a, b) => b.matches - a.matches);
  
  if (planScores.length > 0 && planScores[0].matches > 0) {
    return basePlans.find(plan => plan.id === planScores[0].planId) || null;
  }
  
  return basePlans[0]; // Default to starter plan
};

// Helper function to get recommended packs based on tags
const getRecommendedPacks = (tags: string[]): DevicePack[] => {
  const { packRecommendations } = recommendationLogic;
  
  const recommendedPacks = Object.entries(packRecommendations)
    .map(([packId, packTags]) => {
      const matches = packTags.filter(tag => tags.includes(tag)).length;
      return { packId, matches };
    })
    .filter(pack => pack.matches > 0)
    .sort((a, b) => b.matches - a.matches)
    .map(pack => devicePacks.find(dp => dp.id === pack.packId))
    .filter(Boolean) as DevicePack[];
  
  return recommendedPacks;
};

// Helper function to calculate totals
const calculateTotals = (
  selectedPlan: Plan | null,
  selectedPacks: DevicePack[]
): { monthly: number; install: number; time: string } => {
  let monthlyTotal = selectedPlan?.basePrice || 0;
  let installTotal = 0;
  let totalHours = 0;
  
  selectedPacks.forEach(pack => {
    monthlyTotal += pack.monthlyPrice;
    installTotal += pack.installPrice;
    
    // Parse install time (e.g., "2-3 hours" -> 2.5 hours)
    const timeMatch = pack.installTime.match(/(\d+)-?(\d+)?\s*hours?/);
    if (timeMatch) {
      const min = parseInt(timeMatch[1]);
      const max = timeMatch[2] ? parseInt(timeMatch[2]) : min;
      totalHours += (min + max) / 2;
    }
  });
  
  const estimatedTime = totalHours <= 2 ? '2-3 hours' :
                       totalHours <= 4 ? '3-4 hours' :
                       totalHours <= 6 ? '4-6 hours' :
                       totalHours <= 8 ? '6-8 hours' : '8+ hours';
  
  return {
    monthly: monthlyTotal,
    install: installTotal,
    time: estimatedTime
  };
};

export const useConfiguratorStore = create<ConfiguratorState>()(
  persist(
    (set, get) => ({
      // Initial state
      currentQuestionIndex: 0,
      answers: {},
      tags: [],
      selectedPlan: undefined,
      selectedPacks: [],
      totalMonthlyPrice: 0,
      totalInstallPrice: 0,
      estimatedInstallTime: '2-3 hours',
      isLoading: false,
      showSummary: false,
      
      // Actions
      setAnswer: (questionId: string, answer: string | string[]) => {
        set(state => {
          const newAnswers = { ...state.answers, [questionId]: answer };
          const newTags = collectTags(newAnswers);
          const recommendedPlan = getRecommendedPlan(newTags);
          const recommendedPacks = getRecommendedPacks(newTags);
          const totals = calculateTotals(recommendedPlan, recommendedPacks);
          
          return {
            answers: newAnswers,
            tags: newTags,
            selectedPlan: recommendedPlan?.id,
            selectedPacks: recommendedPacks.map(pack => pack.id),
            totalMonthlyPrice: totals.monthly,
            totalInstallPrice: totals.install,
            estimatedInstallTime: totals.time
          };
        });
      },
      
      setMultipleAnswers: (questionId: string, answers: string[]) => {
        get().setAnswer(questionId, answers);
      },
      
      nextQuestion: () => {
        set(state => ({
          currentQuestionIndex: Math.min(
            state.currentQuestionIndex + 1,
            configuratorQuestions.length - 1
          )
        }));
      },
      
      previousQuestion: () => {
        set(state => ({
          currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0)
        }));
      },
      
      goToQuestion: (index: number) => {
        set({ currentQuestionIndex: Math.max(0, Math.min(index, configuratorQuestions.length - 1)) });
      },
      
      resetConfigurator: () => {
        set({
          currentQuestionIndex: 0,
          answers: {},
          tags: [],
          selectedPlan: undefined,
          selectedPacks: [],
          totalMonthlyPrice: 0,
          totalInstallPrice: 0,
          estimatedInstallTime: '2-3 hours',
          showSummary: false
        });
      },
      
      selectPlan: (planId: string) => {
        set(state => {
          const plan = basePlans.find(p => p.id === planId);
          if (!plan) return state;
          
          const selectedPacks = devicePacks.filter(pack => 
            state.selectedPacks.includes(pack.id)
          );
          const totals = calculateTotals(plan, selectedPacks);
          
          return {
            selectedPlan: planId,
            totalMonthlyPrice: totals.monthly,
            totalInstallPrice: totals.install,
            estimatedInstallTime: totals.time
          };
        });
      },
      
      selectPack: (packId: string) => {
        set(state => {
          const pack = devicePacks.find(p => p.id === packId);
          if (!pack) return state;
          
          const newSelectedPacks = [...state.selectedPacks, packId];
          const selectedPacks = devicePacks.filter(pack => 
            newSelectedPacks.includes(pack.id)
          );
          const plan = basePlans.find(p => p.id === state.selectedPlan) || null;
          const totals = calculateTotals(plan, selectedPacks);
          
          return {
            selectedPacks: newSelectedPacks,
            totalMonthlyPrice: totals.monthly,
            totalInstallPrice: totals.install,
            estimatedInstallTime: totals.time
          };
        });
      },
      
      deselectPack: (packId: string) => {
        set(state => {
          const newSelectedPacks = state.selectedPacks.filter(id => id !== packId);
          const selectedPacks = devicePacks.filter(pack => 
            newSelectedPacks.includes(pack.id)
          );
          const plan = basePlans.find(p => p.id === state.selectedPlan) || null;
          const totals = calculateTotals(plan, selectedPacks);
          
          return {
            selectedPacks: newSelectedPacks,
            totalMonthlyPrice: totals.monthly,
            totalInstallPrice: totals.install,
            estimatedInstallTime: totals.time
          };
        });
      },
      
      setShowSummary: (show: boolean) => {
        set({ showSummary: show });
      },
      
      // Computed getters
      getCurrentQuestion: () => {
        const state = get();
        return configuratorQuestions[state.currentQuestionIndex] || null;
      },
      
      getRecommendedPlan: () => {
        const state = get();
        return basePlans.find(plan => plan.id === state.selectedPlan) || null;
      },
      
      getRecommendedPacks: () => {
        const state = get();
        return devicePacks.filter(pack => state.selectedPacks.includes(pack.id));
      },
      
      getConfiguration: () => {
        const state = get();
        return {
          sessionId: `config_${Date.now()}`,
          answers: state.answers,
          tags: state.tags,
          selectedPlan: state.selectedPlan,
          selectedPacks: state.selectedPacks,
          totalMonthlyPrice: state.totalMonthlyPrice,
          totalInstallPrice: state.totalInstallPrice,
          estimatedInstallTime: state.estimatedInstallTime,
          createdAt: new Date(),
          updatedAt: new Date()
        };
      }
    }),
    {
      name: 'dwella-configurator',
      partialize: (state) => ({
        answers: state.answers,
        tags: state.tags,
        selectedPlan: state.selectedPlan,
        selectedPacks: state.selectedPacks
      })
    }
  )
); 