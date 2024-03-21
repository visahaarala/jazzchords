import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
// import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Navigation />
    </>
  );
}

export default RootLayout;
