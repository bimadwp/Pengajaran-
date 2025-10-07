
import React from 'react';

interface QuizResultProps {
  score: number;
  total: number;
  onRetry: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ score, total, onRetry }) => {
  const percentage = Math.round((score / total) * 100);
  const message =
    percentage >= 80
      ? 'Luar Biasa!'
      : percentage >= 60
      ? 'Bagus!'
      : 'Coba Lagi, ya!';

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center animate-fade-in">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{message}</h3>
      <p className="text-lg text-gray-600 mb-4">
        Skor Kamu: <span className="font-bold text-blue-600">{score}</span> dari{' '}
        <span className="font-bold">{total}</span>
      </p>
      <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
        <span className="text-3xl font-bold text-blue-600">{percentage}%</span>
      </div>
      <button
        onClick={onRetry}
        className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        <i className="fa-solid fa-rotate-right mr-2"></i>
        Coba Lagi
      </button>
    </div>
  );
};

export default QuizResult;
