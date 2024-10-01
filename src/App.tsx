import './App.scss';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Play from './pages/Play';
import Info from './pages/Info';
import Metronome from './pages/Metronome';
import Notes from './pages/Notes';
import PlaySettings from './components/play/settings/PlaySettings';

export const isMobile = matchMedia('(pointer:coarse)').matches;

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <RootLayout title='top secret'>
        <ErrorPage />
      </RootLayout>
    ),
    children: [
      { index: true, loader: async () => redirect('/info') },
      {
        path: 'play',
        element: <Play />,
      },
      {
        path: 'playSettings',
        element: <PlaySettings />,
      },
      {
        path: 'metronome',
        element: <Metronome />,
      },
      {
        path: 'notes',
        element: <Notes />,
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
