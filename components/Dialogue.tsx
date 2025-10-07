
import React, { useCallback } from 'react';
import { DialogueSection } from '../types';

const Dialogue: React.FC<{ data: DialogueSection }> = ({ data }) => {
  const playAudio = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Maaf, browser Anda tidak mendukung fitur audio.');
    }
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="text-gray-600 italic mb-4">{data.intro}</p>
      <div className="space-y-4">
        {data.lines.map((line, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              line.speaker === 'Rina' || line.speaker === 'Anna' || line.speaker === 'Sinta'
                ? 'justify-start'
                : 'justify-end'
            }`}
          >
            {line.speaker === 'Rina' || line.speaker === 'Anna' || line.speaker === 'Sinta' ? (
                 <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold flex-shrink-0">{line.speaker.charAt(0)}</div>
            ) : null}

            <div className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                line.speaker === 'Rina' || line.speaker === 'Anna' || line.speaker === 'Sinta'
                ? 'bg-gray-200 text-gray-800'
                : 'bg-blue-500 text-white'
            }`}>
              <p className="font-bold mb-1">{line.speaker}</p>
              <p>{line.text}</p>
            </div>
            
            {(line.speaker === 'Budi' || line.speaker === 'Ben' || line.speaker === 'Doni') ? (
                 <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold flex-shrink-0">{line.speaker.charAt(0)}</div>
            ) : null}

            <button
              onClick={() => playAudio(line.text)}
              className="text-gray-400 hover:text-blue-500 transition self-center"
              aria-label={`Play audio for ${line.text}`}
            >
              <i className="fas fa-volume-high"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dialogue;
