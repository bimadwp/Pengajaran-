import React, { useState, useEffect, useRef } from 'react';
import { Topic, Section, ExplanationSection, PhrasesSection, DialogueSection, ExerciseSection } from './types';
import ProgressBar from './components/ProgressBar.tsx';
import Dialogue from './components/Dialogue';
import QuizMC from './components/QuizMC';
import QuizTrueFalse from './components/QuizTrueFalse';
import OrderingExercise from './components/DragAndDropExercise.tsx';
import HighlightTextExercise from './components/HighlightTextExercise';

interface TopicViewProps {
  topic: Topic;
  onBack: () => void;
}

const TopicView: React.FC<TopicViewProps> = ({ topic, onBack }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [completedSections, setCompletedSections] = useState<boolean[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const progressKey = `progress-${topic.id}`;

  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem(progressKey);
      if (savedProgress) {
        const { currentSectionIndex: savedIndex, completedSections: savedCompleted } = JSON.parse(savedProgress);
        setCurrentSectionIndex(savedIndex || 0);
        setCompletedSections(savedCompleted || Array(topic.sections.length).fill(false));
      } else {
        setCompletedSections(Array(topic.sections.length).fill(false));
      }
    } catch (error) {
      console.error("Failed to load progress from localStorage", error);
      setCompletedSections(Array(topic.sections.length).fill(false));
    }
  }, [topic.id, topic.sections.length]);

  useEffect(() => {
    // Avoid saving initial empty state
    if (completedSections.length > 0) {
      const progress = {
        currentSectionIndex,
        completedSections,
      };
      localStorage.setItem(progressKey, JSON.stringify(progress));
    }
  }, [currentSectionIndex, completedSections, progressKey]);

  const markSectionAsComplete = () => {
    const newCompleted = [...completedSections];
    if (!newCompleted[currentSectionIndex]) {
        newCompleted[currentSectionIndex] = true;
        setCompletedSections(newCompleted);
    }
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

  const handleExportProgress = () => {
    const progressData = localStorage.getItem(progressKey);
    if (progressData) {
      const blob = new Blob([progressData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `progres-${topic.id}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      alert("Tidak ada progres untuk diekspor.");
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleImportProgress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result;
        if (typeof text === 'string') {
          const importedProgress = JSON.parse(text);
          // Simple validation
          if ('currentSectionIndex' in importedProgress && 'completedSections' in importedProgress) {
            localStorage.setItem(progressKey, text);
            setCurrentSectionIndex(importedProgress.currentSectionIndex);
            setCompletedSections(importedProgress.completedSections);
            alert("Progres berhasil diimpor!");
          } else {
            alert("Format file tidak valid.");
          }
        }
      } catch (error) {
        console.error("Gagal mengimpor progres:", error);
        alert("Gagal membaca file progres. Pastikan file valid.");
      }
    };
    reader.readAsText(file);
  };


  const progress = completedSections.length > 0 ? completedSections.filter(Boolean).length / topic.sections.length : 0;
  const currentSection = topic.sections[currentSectionIndex];

  if (!currentSection) {
      return <div>Loading...</div>;
  }

  const renderSection = (section: Section) => {
    switch (section.type) {
      case 'explanation':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            { (section as ExplanationSection).content.map((p, i) => <p key={i} className="text-slate-700 leading-relaxed">{p}</p>) }
          </div>
        );
      case 'phrases':
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ul className="space-y-3">
              {(section as PhrasesSection).items.map((item, i) => (
                <li key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-blue-800">{item.en}</p>
                    <p className="text-sm text-slate-500">{item.id}</p>
                  </div>
                  <button onClick={() => playAudio(item.en)} className="text-slate-400 hover:text-blue-500 transition"><i className="fas fa-volume-high"></i></button>
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
          case 'ORDERING':
             return <OrderingExercise data={exerciseSection.data} onComplete={markSectionAsComplete} />;
          case 'HIGHLIGHT_TEXT':
            return <HighlightTextExercise data={exerciseSection.data} onComplete={markSectionAsComplete} />;
          default:
            return <div>Latihan tidak ditemukan.</div>;
        }
      default:
        return null;
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="text-slate-600 font-medium hover:text-slate-900 transition-colors">
          <i className="fas fa-arrow-left mr-2"></i>Kembali ke Menu Utama
        </button>
        <div className="flex gap-2">
            <input type="file" ref={fileInputRef} onChange={handleImportProgress} accept=".json" style={{ display: 'none' }} />
            <button onClick={handleImportClick} className="text-sm bg-slate-100 text-slate-700 font-semibold py-1 px-3 rounded-lg hover:bg-slate-200 transition">
              <i className="fas fa-upload mr-2"></i>Impor
            </button>
            <button onClick={handleExportProgress} className="text-sm bg-slate-100 text-slate-700 font-semibold py-1 px-3 rounded-lg hover:bg-slate-200 transition">
              <i className="fas fa-download mr-2"></i>Ekspor
            </button>
        </div>
      </div>


      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
        <div className={`${topic.color} p-8 text-white`}>
          <h1 className="text-3xl font-bold">{topic.title}</h1>
          <p>{topic.description}</p>
        </div>
        
        <div className="p-6">
          <ProgressBar progress={progress} color={topic.color} />
          <h2 className="text-3xl font-semibold tracking-tight text-slate-800 mb-4">{currentSection.title}</h2>
          
          <div>{renderSection(currentSection)}</div>

          <div className="flex justify-between mt-8">
            <button
              onClick={goToPrevSection}
              disabled={currentSectionIndex === 0}
              className="bg-slate-200 text-slate-700 font-bold py-2 px-4 rounded-lg hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Sebelumnya
            </button>
            <button
              onClick={goToNextSection}
              disabled={currentSectionIndex === topic.sections.length - 1}
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
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