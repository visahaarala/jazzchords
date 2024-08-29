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
      e.preventDefault();
      navigate(target);
    }
  };

    const navIcons = {
    info: <InfoIcon />,
    metronome: <MetronomeIcon />,
    settings: <SettingsIcon />,
    play: <PlayIcon />,
  };

  const liStyle = (navName: string): React.CSSProperties | undefined => {
    if ('/' + navName === pathname) {
      return { color: 'var(--color-link)' };
    }
  };

  return (
    <nav className={styles.navigation}>
      <ul>
        {Object.keys(navIcons).map((key) => {
          return (
            <li key={key} style={liStyle(key)}>
              <NavLink to={key} onKeyDown={(e) => keyDownHandler(e, key)} aria-label={key}>
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
