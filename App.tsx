
import React, { useState } from 'react';
import { TOPICS } from './constants';
import { Topic } from './types';
import TopicView from './TopicView';

const Header: React.FC = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">
        <i className="fas fa-book-open-reader mr-2"></i>
        English Smart XI
      </div>
      <p className="hidden md:block text-gray-600">Interactive Learning</p>
    </div>
  </header>
);

const TopicCard: React.FC<{ topic: Topic; onSelect: () => void }> = ({ topic, onSelect }) => (
  <div
    onClick={onSelect}
    className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
  >
    <div className={`p-6 flex items-center justify-center ${topic.color}`}>
      {topic.illustration}
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold text-gray-800">{topic.title}</h3>
      <p className="text-gray-600 mt-2 flex-grow">{topic.description}</p>
      <button className={`mt-4 w-full font-bold py-2 px-4 rounded-lg text-white ${topic.color} hover:opacity-90`}>
        Mulai Belajar
      </button>
    </div>
  </div>
);

const App: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const handleSelectTopic = (topic: Topic) => {
    setSelectedTopic(topic);
  };

  const handleBackToMenu = () => {
    setSelectedTopic(null);
  };

  return (
    <div className="min-h-screen bg-blue-50 text-gray-900 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {!selectedTopic ? (
          <>
            <div className="text-center mb-10">
              <h1 className="text-4xl font-extrabold text-gray-800">Selamat Datang!</h1>
              <p className="text-lg text-gray-600 mt-2">Pilih materi yang ingin kamu pelajari hari ini.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TOPICS.map((topic) => (
                <TopicCard key={topic.id} topic={topic} onSelect={() => handleSelectTopic(topic)} />
              ))}
            </div>
          </>
        ) : (
          <TopicView topic={selectedTopic} onBack={handleBackToMenu} />
        )}
      </main>
      <footer className="text-center py-4 text-gray-500 text-sm">
        © 2024 English Smart XI. Dibuat untuk pembelajaran.
      </footer>
    </div>
  );
};

export default App;
