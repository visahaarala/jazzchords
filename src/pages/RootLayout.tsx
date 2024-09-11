import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import ChordsContextProvider from '../context/ChordsContext';
import MetronomeContextProvider from '../context/MetronomeContext';

const RootLayout = ({
  children,
  title,
}: {
  children?: JSX.Element;
  title?: string;
}) => (
  <MetronomeContextProvider>
    <ChordsContextProvider>
      <div className='container' id='container'>
        <main id='main'>
          <h2>{title ? title : 'jazzchords'}</h2>
          {children ? children : <Outlet />}
        </main>
        <footer>
          <Navigation />
        </footer>
      </div>
    </ChordsContextProvider>
  </MetronomeContextProvider>
);

export default RootLayout;
