import React, { useState } from 'react';
import { MultipleChoiceData } from '../types';

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

  if (submitted) {
    const totalScore = data.questions.length;
    const currentScore = data.questions.reduce((score, q, i) => {
      return answers[i] === q.answer ? score + 1 : score;
    }, 0);
    const percentage = Math.round((currentScore / totalScore) * 100);
    const message =
      percentage >= 80
        ? 'Luar Biasa!'
        : percentage >= 60
        ? 'Bagus!'
        : 'Coba Lagi, ya!';

    return (
      <div className="animate-fade-in">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">{message}</h3>
          <p className="text-lg text-slate-600 mb-4">
            Skor Kamu: <span className="font-bold text-blue-600">{currentScore}</span> dari{' '}
            <span className="font-bold">{totalScore}</span> ({percentage}%)
          </p>
          <button
            onClick={handleRetry}
            className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <i className="fa-solid fa-rotate-right mr-2"></i>
            Reset Latihan
          </button>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-bold text-slate-800">Ulasan Jawaban</h4>
          {data.questions.map((q, qIndex) => {
            const userAnswer = answers[qIndex];
            const isCorrect = userAnswer === q.answer;
            return (
              <div
                key={qIndex}
                className={`p-4 rounded-lg shadow border-l-4 ${
                  isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                }`}
              >
                <p className="font-semibold text-slate-800 mb-3">{qIndex + 1}. {q.question}</p>
                <div className="space-y-2">
                  {q.options.map((option, oIndex) => {
                    let style = 'border-slate-300';
                    let icon = null;

                    if (option === q.answer) {
                      style = 'border-green-500 bg-green-100 font-semibold text-green-800';
                      icon = <i className="fas fa-check text-green-600 ml-auto"></i>;
                    }
                    if (option === userAnswer && !isCorrect) {
                      style = 'border-red-500 bg-red-100 text-red-800';
                      icon = <i className="fas fa-times text-red-600 ml-auto"></i>;
                    }

                    return (
                      <div key={oIndex} className={`flex items-center p-3 rounded-lg border ${style}`}>
                        <span>{option}</span>
                        {icon}
                      </div>
                    );
                  })}
                </div>
                {!isCorrect && q.explanation && (
                  <div className="mt-3 p-3 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 rounded-r-lg">
                    <p><span className="font-bold">Penjelasan:</span> {q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-lg text-slate-600">{data.instruction}</p>
      {data.questions.map((q, qIndex) => (
        <div key={qIndex} className="bg-white p-4 rounded-lg shadow">
          <p className="font-semibold text-slate-800 mb-3">{qIndex + 1}. {q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, oIndex) => (
              <label key={oIndex} className={`flex items-center p-3 rounded-lg border cursor-pointer hover:bg-slate-100 transition ${answers[qIndex] === option ? 'bg-blue-50 border-blue-400' : 'border-slate-200'}`}>
                <input
                  type="radio"
                  name={`question-${qIndex}`}
                  value={option}
                  checked={answers[qIndex] === option}
                  onChange={() => handleOptionChange(qIndex, option)}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-3 text-slate-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        disabled={Object.keys(answers).length !== data.questions.length}
        className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 disabled:bg-slate-300 disabled:from-slate-300 disabled:to-slate-300 transition-opacity duration-300"
      >
        Kirim Jawaban
      </button>
    </div>
  );
};

export default QuizMC;