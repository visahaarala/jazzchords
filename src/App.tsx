import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Play from './pages/Play';
import Settings from './pages/Settings';
import Info from './pages/Info';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Play /> },
      { path: 'play', element: <Play /> },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'info',
        element: <Info />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
