
import React, { useState } from 'react';
import { TrueFalseData } from '../types';
import QuizResult from './QuizResult';

interface QuizTrueFalseProps {
  data: TrueFalseData;
  onComplete: (score: number) => void;
}

const QuizTrueFalse: React.FC<QuizTrueFalseProps> = ({ data, onComplete }) => {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (qIndex: number, answer: boolean) => {
    setAnswers({ ...answers, [qIndex]: answer });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    let score = 0;
    data.statements.forEach((s, i) => {
      if (answers[i] === s.isTrue) {
        score++;
      }
    });
    onComplete(score);
  };
  
  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
  };
  
  const totalScore = data.statements.length;
  const currentScore = data.statements.reduce((score, s, i) => {
      return answers[i] === s.isTrue ? score + 1 : score;
    }, 0);


  if (submitted) {
    return <QuizResult score={currentScore} total={totalScore} onRetry={handleRetry} />;
  }

  return (
    <div className="space-y-4">
      <p className="text-lg text-gray-600">{data.instruction}</p>
      {data.statements.map((s, sIndex) => (
        <div key={sIndex} className="bg-white p-4 rounded-lg shadow">
          <p className="font-semibold text-gray-800 mb-3">{sIndex + 1}. {s.statement}</p>
          <div className="flex space-x-4">
            <button
              onClick={() => handleAnswerChange(sIndex, true)}
              className={`w-full py-2 rounded-lg font-semibold transition ${answers[sIndex] === true ? 'bg-green-500 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
            >
              Benar (True)
            </button>
            <button
              onClick={() => handleAnswerChange(sIndex, false)}
              className={`w-full py-2 rounded-lg font-semibold transition ${answers[sIndex] === false ? 'bg-red-500 text-white' : 'bg-red-100 text-red-800 hover:bg-red-200'}`}
            >
              Salah (False)
            </button>
          </div>
        </div>
      ))}
       <button
        onClick={handleSubmit}
        disabled={Object.keys(answers).length !== data.statements.length}
        className="w-full mt-6 bg-emerald-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-600 disabled:bg-gray-300 transition duration-300"
      >
        Kirim Jawaban
      </button>
    </div>
  );
};

export default QuizTrueFalse;
