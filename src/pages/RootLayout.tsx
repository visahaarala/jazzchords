import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import ChordsContextProvider from '../context/ChordsContext';
import MetronomeContextProvider from '../context/MetronomeContext';

const RootLayout = () => (
  <MetronomeContextProvider>
    <ChordsContextProvider>
      <div className='container' id='container'>
        <main>
          <h2>jazzchords</h2>
          <Outlet />
        </main>
        <footer>
          <Navigation />
        </footer>
      </div>
    </ChordsContextProvider>
  </MetronomeContextProvider>
);

export default RootLayout;
