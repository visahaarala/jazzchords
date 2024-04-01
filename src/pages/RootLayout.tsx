import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import ReducerContextProvider from '../context/ReducerContext';

const RootLayout = () => (
  <ReducerContextProvider>
    <div className='container'>
      <main>
        <Outlet />
      </main>
      <footer>
        <Navigation />
      </footer>
    </div>
  </ReducerContextProvider>
);

export default RootLayout;
