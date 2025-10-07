import React, { useState } from 'react';
import { Topic, Section, ExplanationSection, PhrasesSection, DialogueSection, ExerciseSection } from './types';
import ProgressBar from './components/ProgressBar.tsx';
import Dialogue from './components/Dialogue';
import QuizMC from './components/QuizMC';
import QuizTrueFalse from './components/QuizTrueFalse';
import DragAndDropExercise from './components/DragAndDropExercise';
import HighlightTextExercise from './components/HighlightTextExercise';

interface TopicViewProps {
  topic: Topic;
  onBack: () => void;
}

const TopicView: React.FC<TopicViewProps> = ({ topic, onBack }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [completedSections, setCompletedSections] = useState<boolean[]>(Array(topic.sections.length).fill(false));

  const currentSection = topic.sections[currentSectionIndex];

  const markSectionAsComplete = () => {
    const newCompleted = [...completedSections];
    newCompleted[currentSectionIndex] = true;
    setCompletedSections(newCompleted);
  };
  
  const goToNextSection = () => {
    markSectionAsComplete();
    if (currentSectionIndex < topic.sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  const goToPrevSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };
  
  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const progress = completedSections.filter(Boolean).length / topic.sections.length;

  const renderSection = (section: Section) => {
    switch (section.type) {
      case 'explanation':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            { (section as ExplanationSection).content.map((p, i) => <p key={i} className="text-gray-700 leading-relaxed">{p}</p>) }
          </div>
        );
      case 'phrases':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ul className="space-y-3">
              {(section as PhrasesSection).items.map((item, i) => (
                <li key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-blue-800">{item.en}</p>
                    <p className="text-sm text-gray-500">{item.id}</p>
                  </div>
                  <button onClick={() => playAudio(item.en)} className="text-gray-400 hover:text-blue-500 transition"><i className="fas fa-volume-high"></i></button>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'dialogue':
        return <Dialogue data={section as DialogueSection} />;
      case 'exercise':
        const exerciseSection = section as ExerciseSection;
        switch (exerciseSection.exerciseType) {
          case 'MULTIPLE_CHOICE':
            return <QuizMC data={exerciseSection.data} onComplete={markSectionAsComplete} />;
          case 'TRUE_FALSE':
            return <QuizTrueFalse data={exerciseSection.data} onComplete={markSectionAsComplete} />;
          case 'DRAG_AND_DROP':
             return <DragAndDropExercise data={exerciseSection.data} onComplete={goToNextSection} />;
          case 'HIGHLIGHT_TEXT':
            return <HighlightTextExercise data={exerciseSection.data} onComplete={goToNextSection} />;
          default:
            return <div>Latihan tidak ditemukan.</div>;
        }
      default:
        return null;
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto animate-fade-in">
      <button onClick={onBack} className="text-blue-500 font-semibold mb-4 hover:underline">
        <i className="fas fa-arrow-left mr-2"></i>Kembali ke Menu Utama
      </button>

      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className={`${topic.color} p-6 text-white`}>
          <h1 className="text-3xl font-bold">{topic.title}</h1>
          <p>{topic.description}</p>
        </div>
        
        <div className="p-6">
          <ProgressBar progress={progress} color={topic.color} />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{currentSection.title}</h2>
          
          <div>{renderSection(currentSection)}</div>

          <div className="flex justify-between mt-8">
            <button
              onClick={goToPrevSection}
              disabled={currentSectionIndex === 0}
              className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Sebelumnya
            </button>
            <button
              onClick={goToNextSection}
              disabled={currentSectionIndex === topic.sections.length - 1}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicView;