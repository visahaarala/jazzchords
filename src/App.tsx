import './App.css';
import ContextProvider from './context/Context';
import Container from './components/Container';
import Settings from './components/Settings';
import Chord from './components/Chord';
import PlayControls from './components/PlayControls';
import GitHub from './components/GitHub';
import LightDark from './components/LightDark';

function App() {
  return (
    <ContextProvider>
      <Container>
        <Settings />
        <Chord />
        <PlayControls />
        <GitHub />
        <LightDark />
      </Container>
    </ContextProvider>
  );
}

export default App;
