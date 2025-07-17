import { create } fromzustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ConfiguratorState {
  currentQuestionIndex: number;
  answers: Record<string, string | string[]>;
  tags: string;
  selectedPlan?: string;
  selectedPacks: string;
  totalMonthlyPrice: number;
  totalInstallPrice: number;
  estimatedInstallTime: string;
  isLoading: boolean;
  showSummary: boolean;
  
  setAnswer: (questionId: string, answer: string | stringoid;
  setMultipleAnswers: (questionId: string, answers: string[]) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  goToQuestion: (index: number) => void;
  resetConfigurator: () => void;
  selectPlan: (planId: string) => void;
  selectPack: (packId: string) => void;
  deselectPack: (packId: string) => void;
  setShowSummary: (show: boolean) => void;
  getCurrentQuestion: () => any;
  getRecommendedPlan: () => any;
  getRecommendedPacks: () => any[];
  getConfiguration: () => any;
}

export const useConfiguratorStore = create<ConfiguratorState>()(
  persist(
    (set, get) => ({
      currentQuestionIndex:0     answers: {},
      tags:       selectedPlan: undefined,
      selectedPacks: [],
      totalMonthlyPrice: 0,
      totalInstallPrice: 0  estimatedInstallTime: 2-3 hours,
      isLoading: false,
      showSummary: false,
      
      setAnswer: (questionId: string, answer: string | string[]) => {
        set(state => ({
          ...state,
          answers: [object Object] ...state.answers, [questionId]: answer }
        }));
      },
      
      setMultipleAnswers: (questionId: string, answers: string[]) => {
        get().setAnswer(questionId, answers);
      },
      
      nextQuestion: () => {
        set(state => ({
          ...state,
          currentQuestionIndex: Math.min(state.currentQuestionIndex + 1,10        }));
      },
      
      previousQuestion: () => {
        set(state => ({
          ...state,
          currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0)
        }));
      },
      
      goToQuestion: (index: number) => {
        set({ currentQuestionIndex: Math.max(0, Math.min(index, 10;
      },
      
      resetConfigurator: () => {
        set({
          currentQuestionIndex: 0,
          answers: [object Object]},
          tags: [],
          selectedPlan: undefined,
          selectedPacks: [],
          totalMonthlyPrice: 0      totalInstallPrice: 0,
          estimatedInstallTime: '2-3 hours',
          showSummary: false
        });
      },
      
      selectPlan: (planId: string) => {
        set(state => ({
          ...state,
          selectedPlan: planId
        }));
      },
      
      selectPack: (packId: string) => {
        set(state => ({
          ...state,
          selectedPacks: ...state.selectedPacks, packId]
        }));
      },
      
      deselectPack: (packId: string) => {
        set(state => ({
          ...state,
          selectedPacks: state.selectedPacks.filter(id => id !== packId)
        }));
      },
      
      setShowSummary: (show: boolean) => {
        set({ showSummary: show });
      },
      
      getCurrentQuestion: () => {
        const state = get();
        return { id: `question_${state.currentQuestionIndex}`, title:Sample Question' };
      },
      
      getRecommendedPlan: () => {
        const state = get();
        return { id: state.selectedPlan, name:Sample Plan' };
      },
      
      getRecommendedPacks: () => {
        const state = get();
        return state.selectedPacks.map(id => ({ id, name: `Pack ${id}` }));
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
   [object Object]     name: 'dwella-configurator',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ([object Object]    answers: state.answers,
        tags: state.tags,
        selectedPlan: state.selectedPlan,
        selectedPacks: state.selectedPacks
      })
    }
  )
); 