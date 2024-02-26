import './App.css';
import ContextProvider from './context/Context';
import Settings from './components/Settings';
import ChordPlayer from './components/ChordPlayer';
import GitHub from './components/GitHub';
import Container from './components/Container';

function App() {
  return (
    <ContextProvider>
      <Container>
        <Settings />
        <ChordPlayer />
        <GitHub />
      </Container>
    </ContextProvider>
  );
}

export default App;
