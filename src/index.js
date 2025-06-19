import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import RandomVerse from './dailyVerse';

const bibleVerse = ReactDOM.createRoot(document.getElementById('bibleVerse'));
bibleVerse.render(
  <React.StrictMode>
    <RandomVerse />
  </React.StrictMode>
);
