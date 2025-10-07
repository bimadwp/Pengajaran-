import React from 'react';

interface ProgressBarProps {
  progress: number; // A value between 0 and 1
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
  const progressPercentage = Math.round(progress * 100);

  return (
    <div className="w-full bg-slate-200 rounded-full h-5 my-4">
      <div
        className={`${color} h-5 rounded-full transition-all duration-500 ease-out flex items-center justify-center`}
        style={{ width: `${progressPercentage}%` }}
      >
        <span className="text-sm font-bold text-white">
          {progressPercentage > 10 ? `${progressPercentage}%` : ''}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;