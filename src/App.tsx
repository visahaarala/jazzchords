import './App.scss';
import ContextProvider from './context/Context';
import Settings from './components/settings/Settings';
import Chords from './components/chord/Chords';
import PlayControls from './components/play-controls/PlayControls';
import LightDark from './components/logos/LightDark';
import GitHub from './components/logos/GitHub';

function App() {
  return (
    <ContextProvider>
      <div className='container'>
        <Settings />
        <Chords />
        <PlayControls />
        <LightDark />
        <GitHub />
      </div>
    </ContextProvider>
  );
}

export default App;
