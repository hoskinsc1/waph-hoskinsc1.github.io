import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import BibleVerses from './js/BibleVerses';
import './css/bootstrap/bootstrap_custom.scss'

const bibleVerse = ReactDOM.createRoot(document.getElementById('bibleVerse'));
bibleVerse.render(
  <React.StrictMode>
    <BibleVerses />
  </React.StrictMode>
);
