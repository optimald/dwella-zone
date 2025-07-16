'use client';

import { ConfiguratorQuestion } from '@/lib/configurator/schema';

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
  const isMultiple = question.type === 'multiple';

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">{question.title}</h2>
        {question.description && (
          <p className="text-lg text-slate-300">{question.description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options?.map((option) => {
          const isSelected = selectedOptions.includes(option.id);
          const isSingleSelected = !isMultiple && selectedOptions.includes(option.id);

          return (
            <button
              key={option.id}
              onClick={() => {
                if (isMultiple) {
                  onMultiSelect(option.id);
                } else {
                  onSingleSelect(option.id);
                }
              }}
              className={`p-6 rounded-xl border-2 transition-all duration-200 text-left group hover:scale-105 ${
                isSelected || isSingleSelected
                  ? 'border-dwella-gold bg-dwella-gold/10'
                  : 'border-slate-600 bg-slate-700/30 hover:border-slate-500 hover:bg-slate-700/50'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">
                  {option.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-dwella-gold transition-colors">
                      {option.label}
                    </h3>
                    {isMultiple && (
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isSelected 
                          ? 'border-dwella-gold bg-dwella-gold' 
                          : 'border-slate-400'
                      }`}>
                        {isSelected && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                    )}
                    {!isMultiple && (
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isSingleSelected 
                          ? 'border-dwella-gold bg-dwella-gold' 
                          : 'border-slate-400'
                      }`}>
                        {isSingleSelected && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                    )}
                  </div>
                  {option.description && (
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {option.description}
                    </p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
} 