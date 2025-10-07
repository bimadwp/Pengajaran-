import React, { useState, useEffect } from 'react';
import { DragAndDropData } from '../types';

const DragAndDropExercise: React.FC<{ data: DragAndDropData; onComplete: () => void }> = ({ data, onComplete }) => {
  const [items, setItems] = useState(data.scrambled);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    // Re-scramble on retry or when data changes
    setItems([...data.scrambled].sort(() => Math.random() - 0.5));
    setIsCorrect(null);
  }, [data]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: string) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
    // This is crucial for drag-and-drop to work reliably across browsers
    e.dataTransfer.setData('text/plain', item);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetItem: string) => {
    e.preventDefault();
    if (!draggedItem || draggedItem === targetItem) {
      setDraggedItem(null);
      return;
    }

    const newItems = [...items];
    const draggedIndex = newItems.indexOf(draggedItem);
    const targetIndex = newItems.indexOf(targetItem);

    if (draggedIndex !== -1 && targetIndex !== -1) {
      const [removed] = newItems.splice(draggedIndex, 1);
      newItems.splice(targetIndex, 0, removed);
      setItems(newItems);
    }
    setDraggedItem(null);
  };

  const handleDragEnd = () => {
    // Clean up dragged item state if the drop occurs outside a valid target
    setDraggedItem(null);
  };
  
  const handleCheck = () => {
    const correct = JSON.stringify(items) === JSON.stringify(data.correctOrder);
    setIsCorrect(correct);
    if(correct) {
      setTimeout(() => onComplete(), 1500);
    }
  };
  
  const handleRetry = () => {
    setItems([...data.scrambled].sort(() => Math.random() - 0.5));
    setIsCorrect(null);
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <p className="text-lg text-gray-700 mb-4">{data.instruction}</p>
      <div className="space-y-3 p-4 bg-blue-50 rounded-lg border-2 border-dashed border-blue-200">
        {items.map((item) => (
          <div
            key={item}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, item)}
            onDragEnd={handleDragEnd}
            className={`p-3 bg-white rounded-md shadow-sm cursor-grab active:cursor-grabbing flex items-center transition-opacity ${
                draggedItem === item ? 'opacity-50' : 'opacity-100'
            }`}
          >
            <i className="fa-solid fa-grip-vertical text-gray-400 mr-3"></i>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        {isCorrect === null && <button onClick={handleCheck} className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition">Periksa Urutan</button>}
        {isCorrect === true && <div className="p-3 rounded-lg bg-green-100 text-green-800 font-semibold">Benar! Urutan percakapan sudah logis.</div>}
        {isCorrect === false && (
          <div className="flex flex-col items-center gap-4">
             <div className="p-3 rounded-lg bg-red-100 text-red-800 font-semibold">Salah, coba susun kembali.</div>
            <button onClick={handleRetry} className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition">Coba Lagi</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DragAndDropExercise;