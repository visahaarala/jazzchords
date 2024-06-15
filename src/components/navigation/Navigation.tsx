import styles from './Navigation.module.scss';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { KeyboardEvent } from 'react';
import SettingsIcon from '../icons/SettingsIcon';
import InfoIcon from '../icons/InfoIcon';
import MetronomeIcon from '../icons/MetronomeIcon';
import PlayIcon from '../icons/PlayIcon';

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const keyDownHandler = (
    e: KeyboardEvent<HTMLAnchorElement>,
    target: string
  ) => {
    if (e.code === 'Space') {
      navigate(target);
    }
  };

  const color = (paths: string[]) => {
    for (const path of paths) {
      if ('/' + path === pathname) {
        return 'var(--color-link)';
      }
    }
  };

  const navIcons = {
    info: <InfoIcon color={color(['info'])} />,
    metronome: <MetronomeIcon color={color(['metronome'])} />,
    settings: <SettingsIcon color={color(['settings'])} />,
    play: <PlayIcon color={color(['', 'play'])} />,
  };

  return (
    <nav className={styles.navigation}>
      <ul>
        {Object.keys(navIcons).map((key) => {
          return (
            <li key={key}>
              <NavLink to={key} onKeyDown={(e) => keyDownHandler(e, key)}>
                {navIcons[key as keyof typeof navIcons]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
