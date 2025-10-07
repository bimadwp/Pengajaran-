
import React, { useState } from 'react';
import { MultipleChoiceData } from '../types';
import QuizResult from './QuizResult';

interface QuizMCProps {
  data: MultipleChoiceData;
  onComplete: (score: number) => void;
}

const QuizMC: React.FC<QuizMCProps> = ({ data, onComplete }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (questionIndex: number, option: string) => {
    setAnswers({ ...answers, [questionIndex]: option });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    let score = 0;
    data.questions.forEach((q, i) => {
      if (answers[i] === q.answer) {
        score++;
      }
    });
    onComplete(score);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
  };
  
  const totalScore = data.questions.length;
  const currentScore = data.questions.reduce((score, q, i) => {
      return answers[i] === q.answer ? score + 1 : score;
    }, 0);

  if (submitted) {
    return <QuizResult score={currentScore} total={totalScore} onRetry={handleRetry} />;
  }

  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-600">{data.instruction}</p>
      {data.questions.map((q, qIndex) => (
        <div key={qIndex} className="bg-white p-4 rounded-lg shadow">
          <p className="font-semibold text-gray-800 mb-3">{qIndex + 1}. {q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, oIndex) => (
              <label key={oIndex} className="flex items-center p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-blue-50 transition">
                <input
                  type="radio"
                  name={`question-${qIndex}`}
                  value={option}
                  checked={answers[qIndex] === option}
                  onChange={() => handleOptionChange(qIndex, option)}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-3 text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        disabled={Object.keys(answers).length !== data.questions.length}
        className="w-full bg-emerald-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-600 disabled:bg-gray-300 transition duration-300"
      >
        Kirim Jawaban
      </button>
    </div>
  );
};

export default QuizMC;
