import './App.css';
import ContextProvider from './context/Context';
import Container from './components/Container';
import Settings from './components/Settings';
import Chords from './components/Chords';
import PlayControls from './components/PlayControls';
import LightDark from './components/LightDark';
import GitHub from './components/GitHub';

function App() {
  return (
    <ContextProvider>
      <Container>
        <Settings />
        <Chords />
        <PlayControls />
        <LightDark />
        <GitHub />
      </Container>
    </ContextProvider>
  );
}

export default App;
