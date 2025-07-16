'use client';

import { useState } from 'react';
import { useConfiguratorStore } from '@/stores/configuratorStore';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';
import { configuratorQuestions } from '@/lib/configurator/schema';

export default function ConfiguratorFlow() {
  const {
    currentQuestionIndex,
    getCurrentQuestion,
    nextQuestion,
    previousQuestion,
    setAnswer,
    setMultipleAnswers,
    setShowSummary,
    answers
  } = useConfiguratorStore();

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const currentQuestion = getCurrentQuestion();
  const totalQuestions = configuratorQuestions.length;

  const handleSingleSelect = (optionId: string) => {
    setAnswer(currentQuestion!.id, optionId);
    nextQuestion();
  };

  const handleMultiSelect = (optionId: string) => {
    const newSelection = selectedOptions.includes(optionId)
      ? selectedOptions.filter(id => id !== optionId)
      : [...selectedOptions, optionId];
    
    setSelectedOptions(newSelection);
  };

  const handleMultiSelectContinue = () => {
    if (selectedOptions.length > 0) {
      setMultipleAnswers(currentQuestion!.id, selectedOptions);
      setSelectedOptions([]);
      nextQuestion();
    }
  };

  const handleContinue = () => {
    if (currentQuestion?.type === 'multiple') {
      handleMultiSelectContinue();
    } else {
      nextQuestion();
    }
  };

  const handleBack = () => {
    setSelectedOptions([]);
    previousQuestion();
  };

  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const canContinue = currentQuestion?.type === 'multiple' 
    ? selectedOptions.length > 0 
    : answers[currentQuestion?.id || ''];

  if (!currentQuestion) {
    return (
      <div className="text-center text-white">
        <p>Loading configurator...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <ProgressBar 
        current={currentQuestionIndex + 1} 
        total={totalQuestions} 
      />

      {/* Question Card */}
      <QuestionCard
        question={currentQuestion}
        selectedOptions={selectedOptions}
        onSingleSelect={handleSingleSelect}
        onMultiSelect={handleMultiSelect}
      />

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8">
        <button
          onClick={handleBack}
          disabled={currentQuestionIndex === 0}
          className="flex items-center space-x-2 px-6 py-3 text-white hover:text-dwella-gold disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="flex space-x-4">
          {isLastQuestion ? (
            <button
              onClick={() => setShowSummary(true)}
              disabled={!canContinue}
              className="flex items-center space-x-2 px-8 py-3 bg-dwella-gold text-slate-900 rounded-xl hover:bg-dwella-gold/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
            >
              <span>See My Configuration</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleContinue}
              disabled={!canContinue}
              className="flex items-center space-x-2 px-8 py-3 bg-dwella-gold text-slate-900 rounded-xl hover:bg-dwella-gold/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
            >
              <span>Continue</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Skip Question (for optional questions) */}
      {!currentQuestion.required && (
        <div className="text-center">
          <button
            onClick={handleContinue}
            className="text-white hover:text-dwella-gold text-sm transition-colors font-medium underline underline-offset-4 hover:no-underline"
          >
            Skip this question
          </button>
        </div>
      )}
    </div>
  );
} 