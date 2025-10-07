
import React from 'react';

interface ProgressBarProps {
  progress: number; // A value between 0 and 1
  color: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
  const progressPercentage = Math.round(progress * 100);

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 my-4 shadow-inner">
      <div
        className={`${color} h-4 rounded-full transition-all duration-500 ease-out flex items-center justify-center`}
        style={{ width: `${progressPercentage}%` }}
      >
        <span className="text-xs font-bold text-white">
          {progressPercentage}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
