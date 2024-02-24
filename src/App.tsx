// import React from 'react';
import './App.css';
import ChordSettings from './components/ChordSettings';
// import TempoSettings from './components/TempoSettings';
import ChordPlayer from './components/ChordPlayer';
import ContextProvider from './context/Context';

function App() {
  return (
    <ContextProvider>
      <div className='container'>
        <ChordSettings />
        {/* <TempoSettings /> */}
        <ChordPlayer />
      </div>
    </ContextProvider>
  );
}

export default App;
