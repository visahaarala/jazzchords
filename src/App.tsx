import './App.scss';
// import ContextProvider from './context/Context';
// import Settings from './components/settings/Settings';
// import Chords from './components/chord/Chords';
// import PlayControls from './components/play-controls/PlayControls';
// import LightDark from './components/logos/LightDark';
// import GitHub from './components/logos/GitHub';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Chords from './pages/Chords';
import Settings from './pages/Settings';
import Info from './pages/Info';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Chords /> },
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

// function App() {
//   return
// }

// function App() {
//   return (
//     <ContextProvider>
//       <div className='container'>
//         <Settings />
//         <Chords />
//         <PlayControls />
//         <LightDark />
//         <GitHub />
//       </div>
//     </ContextProvider>
//   );
// }

export default App;
