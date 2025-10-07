import React, { useState, useEffect } from 'react';
import { OrderingData } from '../types';

const OrderingExercise: React.FC<{ data: OrderingData; onComplete: () => void }> = ({ data, onComplete }) => {
  const [scrambledItems, setScrambledItems] = useState<string[]>([]);
  const [userOrder, setUserOrder] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Effect to scramble items only once when the component mounts or data changes
  useEffect(() => {
    const initialScramble = [...data.scrambled].sort(() => Math.random() - 0.5);
    setScrambledItems(initialScramble);
    handleReset(); // Reset state when data changes
  }, [data]);

  const handleItemClick = (item: string) => {
    if (isSubmitted || userOrder.includes(item)) {
      return; // Don't allow changes after submitting or re-selecting
    }
    setUserOrder([...userOrder, item]);
  };

  const handleCheck = () => {
    if (userOrder.length !== data.correctOrder.length) return;

    const correct = JSON.stringify(userOrder) === JSON.stringify(data.correctOrder);
    setIsCorrect(correct);
    setIsSubmitted(true);
    if (correct) {
      onComplete();
    }
  };

  const handleReset = () => {
    setUserOrder([]);
    setIsSubmitted(false);
    setIsCorrect(false);
  };

  const allItemsSelected = userOrder.length === scrambledItems.length;

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <p className="text-lg text-slate-700 mb-4">{data.instruction}</p>
      <div className="space-y-3">
        {scrambledItems.map((item) => {
          const orderIndex = userOrder.indexOf(item);
          const isSelected = orderIndex !== -1;

          return (
            <div
              key={item}
              onClick={() => handleItemClick(item)}
              className={`p-3 rounded-md shadow-sm flex items-center transition-all duration-200 ${
                isSelected ? 'bg-blue-100 text-slate-500' : 'bg-slate-50 cursor-pointer hover:bg-slate-100'
              }`}
            >
              <div
                className={`w-8 h-8 mr-4 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                  isSelected ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-500'
                }`}
              >
                {isSelected ? orderIndex + 1 : '?'}
              </div>
              <span>{item}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        {!isSubmitted ? (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleReset}
              className="bg-slate-400 text-white font-bold py-2 px-6 rounded-lg hover:bg-slate-500 transition"
            >
              <i className="fa-solid fa-rotate-right mr-2"></i>
              Reset
            </button>
            <button
              onClick={handleCheck}
              disabled={!allItemsSelected}
              className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              Periksa Urutan
            </button>
          </div>
        ) : isCorrect ? (
          <div className="text-center">
            <div className="p-3 mb-4 rounded-lg bg-green-100 text-green-800 font-semibold">
              Benar! Urutan percakapan sudah logis.
            </div>
             <button
              onClick={handleReset}
              className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              <i className="fa-solid fa-rotate-right mr-2"></i>
              Reset Latihan
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="p-3 mb-4 rounded-lg bg-red-100 text-red-800 font-semibold">
              Salah, coba susun kembali.
            </div>
            <button
              onClick={handleReset}
              className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition"
            >
              <i className="fa-solid fa-rotate-right mr-2"></i>
              Reset Latihan
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderingExercise;