import React, { useState } from 'react';
import { TrueFalseData } from '../types';

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

  if (submitted) {
    const totalScore = data.statements.length;
    const currentScore = data.statements.reduce((score, s, i) => {
      return answers[i] === s.isTrue ? score + 1 : score;
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
          {data.statements.map((s, sIndex) => {
            const userAnswer = answers[sIndex];
            const isCorrect = userAnswer === s.isTrue;
            return (
              <div
                key={sIndex}
                className={`p-4 rounded-lg shadow border-l-4 ${
                  isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                }`}
              >
                <p className="font-semibold text-slate-800 mb-3">{sIndex + 1}. {s.statement}</p>
                <div className="p-3 rounded-lg border-2 bg-white">
                  <p>
                    Jawabanmu:{' '}
                    <span className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                      {userAnswer ? 'Benar' : 'Salah'}
                    </span>{' '}
                    {isCorrect ? (
                      <i className="fas fa-check text-green-600"></i>
                    ) : (
                      <i className="fas fa-times text-red-600"></i>
                    )}
                  </p>
                  {!isCorrect && (
                    <p>
                      Jawaban yang Benar:{' '}
                      <span className="font-bold text-green-700">{s.isTrue ? 'Benar' : 'Salah'}</span>
                    </p>
                  )}
                </div>
                {!isCorrect && s.explanation && (
                  <div className="mt-3 p-3 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 rounded-r-lg">
                    <p><span className="font-bold">Penjelasan:</span> {s.explanation}</p>
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
    <div className="space-y-4">
      <p className="text-lg text-slate-600">{data.instruction}</p>
      {data.statements.map((s, sIndex) => (
        <div key={sIndex} className="bg-white p-4 rounded-lg shadow">
          <p className="font-semibold text-slate-800 mb-3">{sIndex + 1}. {s.statement}</p>
          <div className="flex space-x-4">
            <button
              onClick={() => handleAnswerChange(sIndex, true)}
              className={`w-full py-2 rounded-lg font-semibold transition ${
                answers[sIndex] === true ? 'bg-green-500 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              Benar (True)
            </button>
            <button
              onClick={() => handleAnswerChange(sIndex, false)}
              className={`w-full py-2 rounded-lg font-semibold transition ${
                answers[sIndex] === false ? 'bg-red-500 text-white' : 'bg-red-100 text-red-800 hover:bg-red-200'
              }`}
            >
              Salah (False)
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        disabled={Object.keys(answers).length !== data.statements.length}
        className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 disabled:bg-slate-300 disabled:from-slate-300 disabled:to-slate-300 transition-opacity duration-300"
      >
        Kirim Jawaban
      </button>
    </div>
  );
};

export default QuizTrueFalse;