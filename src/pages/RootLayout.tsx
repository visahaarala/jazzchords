import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

function RootLayout() {
  return (
    <div className='container'>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
}

export default RootLayout;
