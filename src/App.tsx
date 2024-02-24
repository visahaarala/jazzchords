// import React from 'react';
import './App.css';
import ChordSettings from './components/ChordSettings';
import TempoSettings from './components/TempoSettings';
import ChordPlayer from './components/ChordPlayer';

function App() {
  return (
    <div className='container'>
      <ChordSettings />
      <TempoSettings />
      <ChordPlayer />
    </div>
  );
}

export default App;
