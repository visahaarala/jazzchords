import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';

const RootLayout = () => (
  <div className='container'>
    <main>
      <Outlet />
    </main>
    <footer>
      <Navigation />
    </footer>
  </div>
);

export default RootLayout;
