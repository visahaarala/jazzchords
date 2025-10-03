import { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navigation from '../components/navigation/Navigation';
import ChordsContextProvider from '../context/ChordsContext';
import MetronomeContextProvider from '../context/MetronomeContext';

const RootLayout = ({
  children,
  title,
}: {
  // to have ErrorPage inside RootLayout
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
      <Analytics />
    </ChordsContextProvider>
  </MetronomeContextProvider>
);

export default RootLayout;
