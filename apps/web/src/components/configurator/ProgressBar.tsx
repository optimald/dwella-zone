interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-white font-semibold">
          Question {current} of {total}
        </span>
        <span className="text-secondary-400 text-sm">
          {Math.round(percentage)}% Complete
        </span>
      </div>
      
      <div className="w-full bg-secondary-700 rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="flex justify-between text-xs text-secondary-400">
        <span>Getting Started</span>
        <span>Almost Done</span>
      </div>
    </div>
  );
} 