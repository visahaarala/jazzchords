// import React from 'react';
import { useState } from 'react';
import './App.css';
import { generateChord } from './data/harmonies';
// import { roundOfFifts } from './data/harmonies';

function App() {
  const [chord, setChord] = useState<string>();

  const refreshHandler = () => {
    setChord(generateChord());
  }

  return (
    <>
      <h1>{chord}</h1>
      <button onClick={refreshHandler}>refresh</button>
    </>
  );
}

export default App;
