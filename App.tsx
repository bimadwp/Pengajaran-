import React, { useState, useEffect } from 'react';
import { TOPICS } from './constants';
import { Topic } from './types';
import TopicView from './TopicView';
import FlashcardView from './components/FlashcardView';

const Header: React.FC = () => (
  <header className="bg-white border-b border-slate-200">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-slate-800">
        <i className="fas fa-book-open-reader mr-2 text-blue-600"></i>
        English Smart XI
      </div>
      <p className="hidden md:block text-slate-600 font-medium">Interactive Learning</p>
    </div>
  </header>
);

interface ModuleCardProps {
  module: Topic;
  onSelect: () => void;
  progress: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onSelect, progress }) => {
  const isFeature = !!module.featureType;
  const progressPercentage = Math.round(progress * 100);
  const isCompleted = !isFeature && progressPercentage === 100;

  return (
    <div
      onClick={onSelect}
      className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col border border-slate-200/80"
    >
      <div className={`relative p-6 flex items-center justify-center ${module.color}`}>
        {module.illustration}
        {isCompleted && (
          <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
            <i className="fas fa-check-circle text-green-500 text-2xl"></i>
          </div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-semibold text-slate-900">{module.title}</h3>
        <p className="text-slate-600 mt-2 flex-grow">{module.description}</p>
        
        {!isFeature && (
            <>
                <div className="w-full bg-slate-200 rounded-full h-2.5 my-4">
                <div className={`${module.color} h-2.5 rounded-full transition-all duration-500`} style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <p className="text-sm text-slate-500 text-center mb-3 font-medium">{progressPercentage}% Selesai</p>
            </>
        )}
        
        <button className={`w-full font-bold py-3 px-4 rounded-lg text-white transition-all duration-300 transform hover:scale-105 mt-auto ${isCompleted ? 'bg-green-500' : module.color}`}>
            {isFeature ? 'Buka Fitur' : (isCompleted ? 'Ulas Kembali' : 'Mulai Belajar')}
        </button>
      </div>
    </div>
  );
};


const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Topic | null>(null);
  const [moduleProgress, setModuleProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    // This effect runs when the component mounts and when the user returns to the main menu.
    const calculateAllProgress = () => {
      const newProgress: Record<string, number> = {};
      TOPICS.forEach(module => {
        if (module.featureType) {
            newProgress[module.id] = 0;
            return;
        }
        try {
          const progressKey = `progress-${module.id}`;
          const savedProgress = localStorage.getItem(progressKey);
          if (savedProgress) {
            const { completedSections } = JSON.parse(savedProgress);
            const progress = completedSections && module.sections && module.sections.length > 0
              ? completedSections.filter(Boolean).length / module.sections.length
              : 0;
            newProgress[module.id] = progress;
          } else {
            newProgress[module.id] = 0;
          }
        } catch (e) {
          console.error("Failed to calculate progress for module", module.id, e);
          newProgress[module.id] = 0;
        }
      });
      setModuleProgress(newProgress);
    };

    if (!selectedItem) {
        calculateAllProgress();
    }
  }, [selectedItem]);

  const handleSelectItem = (module: Topic) => {
    setSelectedItem(module);
  };

  const handleBackToMenu = () => {
    setSelectedItem(null);
  };
  
  const renderView = () => {
    if (!selectedItem) return null;

    if (selectedItem.featureType === 'flashcards') {
        return <FlashcardView onBack={handleBackToMenu} />;
    }
    // Ensure sections exist before rendering TopicView
    if (selectedItem.sections) {
        return <TopicView topic={selectedItem} onBack={handleBackToMenu} />;
    }
    // Fallback or error view if a module is malformed
    return <p>Error: Modul tidak dapat dimuat.</p>;
  }


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        {!selectedItem ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">Selamat Datang!</h1>
              <p className="text-lg md:text-xl text-slate-600 mt-3 max-w-2xl mx-auto">Pilih materi yang ingin kamu pelajari hari ini.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {TOPICS.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  progress={moduleProgress[module.id] || 0}
                  onSelect={() => handleSelectItem(module)}
                />
              ))}
            </div>
          </>
        ) : (
          renderView()
        )}
      </main>
      <footer className="text-center py-4 text-slate-500 text-sm">
        © 2025 English Smart XI by bxm. Dibuat untuk pembelajaran.
      </footer>
    </div>
  );
};

export default App;