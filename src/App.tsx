import './App.css';
import ContextProvider from './context/Context';
import Container from './components/Container';
import Settings from './components/Settings';
import ChordDisplay from './components/ChordDisplay';
import PlayControls from './components/PlayControls';
import GitHub from './components/GitHub';
import LightDark from './img/LightDark';

function App() {
  return (
    <ContextProvider>
      <Container>
        <Settings />
        <ChordDisplay />
        <PlayControls />
        <LightDark />
        <GitHub />
      </Container>
    </ContextProvider>
  );
}

export default App;
