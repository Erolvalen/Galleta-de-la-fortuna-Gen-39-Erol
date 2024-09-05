// src/App.jsx
import React, { useState } from 'react';
import phrases from './data/phrases.json';
import PhraseCard from './components/PhraseCard';
import BackgroundImage from './components/BackgroundImage';
import './styles.css';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextPhrase = () => {
    setCurrentIndex(Math.floor(Math.random() * phrases.length));
  };

  return (
    <div className="app">
      <BackgroundImage index={currentIndex} />
      <PhraseCard
        phrase={phrases[currentIndex].phrase}
        author={phrases[currentIndex].author}
        onNextPhrase={handleNextPhrase}
      />
    </div>
  );
};

export default App;
