import './App.css';
import ContextProvider from './context/Context';
import Settings from './components/Settings';
import ChordPlayer from './components/ChordPlayer';
import GitHub from './icons/GitHub';

function App() {
  return (
    <ContextProvider>
      <div className='container'>
        <Settings />
        <ChordPlayer />
        <GitHub />
      </div>
    </ContextProvider>
  );
}

export default App;
