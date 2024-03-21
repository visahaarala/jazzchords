import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import ContextProvider from '../context/Context';

const RootLayout = () => (
  <ContextProvider>
    <div className='container'>
      <main>
        <Outlet />
      </main>
      <footer>
        <Navigation />
      </footer>
    </div>
  </ContextProvider>
);

export default RootLayout;
