import React, { useState } from 'react';
import { FLASHCARD_DATA } from '../constants';

interface FlashcardViewProps {
  onBack: () => void;
}

const FlashcardView: React.FC<FlashcardViewProps> = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const totalCards = FLASHCARD_DATA.length;
  const currentCard = FLASHCARD_DATA[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const goToNext = () => {
    setIsFlipped(false);
    // Use a timeout to allow the card to flip back before changing content
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 150);
  };

  const goToPrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    }, 150);
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="text-slate-600 font-medium hover:text-slate-900 transition-colors">
          <i className="fas fa-arrow-left mr-2"></i>Kembali ke Menu Utama
        </button>
      </div>

      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-slate-800">Flashcards Kosakata</h1>
        <p className="text-slate-600">Klik kartu untuk melihat terjemahan.</p>
      </div>

      <div className="h-64 w-full max-w-lg mx-auto mb-6">
        <div 
          className={`flip-card h-full w-full ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
                <p className="text-sm text-slate-500 uppercase tracking-wider">{currentCard.type}</p>
                <h2 className="text-4xl font-bold text-slate-800">{currentCard.word}</h2>
            </div>
            <div className="flip-card-back">
                <h3 className="text-3xl font-bold">{currentCard.translation}</h3>
                <p className="text-lg mt-4 italic">"{currentCard.example}"</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-4">
        <button 
            onClick={goToPrev}
            className="bg-white border border-slate-300 text-slate-700 font-bold p-4 rounded-full hover:bg-slate-100 transition shadow-sm"
            aria-label="Previous Card"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <p className="text-lg font-semibold text-slate-700 w-24 text-center">
            {currentIndex + 1} / {totalCards}
        </p>

        <button 
            onClick={goToNext}
            className="bg-white border border-slate-300 text-slate-700 font-bold p-4 rounded-full hover:bg-slate-100 transition shadow-sm"
            aria-label="Next Card"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default FlashcardView;