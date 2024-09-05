// src/components/PhraseCard.jsx
import React from 'react';

const PhraseCard = ({ phrase, author, onNextPhrase }) => {
  return (
    <div className="phrase-card">
      <p className="phrase">"{phrase}"</p>
      <p className="author">- {author} -</p>
      <button className="next-btn" onClick={onNextPhrase}>
        Siguiente Frase
      </button>
    </div>
  );
};

export default PhraseCard;