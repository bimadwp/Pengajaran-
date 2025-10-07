
import React, { useState } from 'react';
import { HighlightTextData } from '../types';

type StructureType = 'thesis' | 'argument' | 'reiteration';

const HighlightTextExercise: React.FC<{ data: HighlightTextData; onComplete: () => void }> = ({ data, onComplete }) => {
  const [selectedType, setSelectedType] = useState<StructureType | null>(null);
  const [correctlyHighlighted, setCorrectlyHighlighted] = useState<Record<string, StructureType>>({});

  const handleSelectType = (type: StructureType) => {
    setSelectedType(type);
  };

  const handleTextClick = (partType: StructureType, partText: string) => {
    if (selectedType === partType) {
      const newHighlighted = { ...correctlyHighlighted, [partText]: partType };
      setCorrectlyHighlighted(newHighlighted);

      if (Object.keys(newHighlighted).length === data.parts.length) {
          setTimeout(() => onComplete(), 1500);
      }
    } else {
        // Maybe add some visual feedback for wrong selection
    }
  };

  const typeColors: Record<StructureType, string> = {
    thesis: 'bg-blue-200 border-blue-400',
    argument: 'bg-green-200 border-green-400',
    reiteration: 'bg-yellow-200 border-yellow-400',
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <p className="text-lg text-gray-700 mb-4">{data.instruction}</p>
      <div className="flex justify-center gap-2 mb-4">
        <button onClick={() => handleSelectType('thesis')} className={`px-4 py-2 rounded-lg font-semibold ${selectedType === 'thesis' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Thesis</button>
        <button onClick={() => handleSelectType('argument')} className={`px-4 py-2 rounded-lg font-semibold ${selectedType === 'argument' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>Argument</button>
        <button onClick={() => handleSelectType('reiteration')} className={`px-4 py-2 rounded-lg font-semibold ${selectedType === 'reiteration' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}>Reiteration</button>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200 leading-relaxed">
        <h4 className="text-center font-bold text-xl mb-4">The Importance of Breakfast</h4>
        {data.parts.map((part, index) => (
          <span
            key={index}
            onClick={() => handleTextClick(part.type, part.text)}
            className={`cursor-pointer transition duration-300 p-1 rounded ${correctlyHighlighted[part.text] ? typeColors[correctlyHighlighted[part.text]] : 'hover:bg-gray-200'}`}
          >
            {part.text}{' '}
          </span>
        ))}
      </div>
      
       {Object.keys(correctlyHighlighted).length === data.parts.length && (
        <div className="mt-4 p-3 rounded-lg bg-green-100 text-green-800 font-semibold text-center">
            Kerja bagus! Kamu berhasil menandai semua bagian dengan benar.
        </div>
      )}
    </div>
  );
};

export default HighlightTextExercise;
