'use client';

import { ConfiguratorQuestion } from '@/lib/configurator/schema';
import { Check, ChevronRight } from 'lucide-react';

interface QuestionCardProps {
  question: ConfiguratorQuestion;
  selectedOptions: string[];
  onSingleSelect: (optionId: string) => void;
  onMultiSelect: (optionId: string) => void;
}

export default function QuestionCard({
  question,
  selectedOptions,
  onSingleSelect,
  onMultiSelect
}: QuestionCardProps) {
  const isMultiSelect = question.type === 'multiple';

  const handleOptionClick = (optionId: string) => {
    if (isMultiSelect) {
      onMultiSelect(optionId);
    } else {
      onSingleSelect(optionId);
    }
  };

  return (
    <div className="bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary-700">
      {/* Question Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          {question.title}
        </h2>
        {question.description && (
          <p className="text-secondary-300 text-lg">
            {question.description}
          </p>
        )}
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options?.map((option) => {
          const isSelected = selectedOptions.includes(option.id);
          
          return (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className={`relative p-6 rounded-xl border-2 transition-all duration-200 text-left group ${
                isSelected
                  ? 'border-primary-500 bg-primary-500/10'
                  : 'border-secondary-600 hover:border-primary-500/50 hover:bg-secondary-700/50'
              }`}
            >
              {/* Selection Indicator */}
              <div className="absolute top-4 right-4">
                {isSelected ? (
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <div className="w-6 h-6 border-2 border-secondary-500 rounded-full group-hover:border-primary-500 transition-colors" />
                )}
              </div>

              {/* Option Content */}
              <div className="pr-12">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {option.label}
                </h3>
                {option.description && (
                  <p className="text-secondary-400 text-sm">
                    {option.description}
                  </p>
                )}
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-5 h-5 text-primary-500" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Multi-select Instructions */}
      {isMultiSelect && (
        <div className="mt-6 p-4 bg-secondary-700/50 rounded-lg">
          <p className="text-secondary-300 text-sm">
            <strong>Tip:</strong> You can select multiple options. Click each option you want to include.
          </p>
        </div>
      )}
    </div>
  );
} 