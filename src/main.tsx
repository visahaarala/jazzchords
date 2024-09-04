import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//////////////////////////
// TESTING NOTES
//////////////////////////
console.log('--- TESTING ---');
// import { printNotes } from './data/notesInChord.ts';
// printNotes();
import { runDoodling } from './data/doodling.ts';
runDoodling();