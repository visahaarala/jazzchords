import styles from './Navigation.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import SettingsIcon from '../icon-buttons/navigation/SettingsIcon';
import InfoIcon from '../icon-buttons/navigation/InfoIcon';
import PlaybackIcon from '../icon-buttons/navigation/PlaybackIcon';
import { KeyboardEvent } from 'react';

const Navigation = () => {
  const navigate = useNavigate();

  const keyDownHandler = (
    e: KeyboardEvent<HTMLAnchorElement>,
    target: string
  ) => {
    if (e.code === 'Space') {
      navigate(target);
    }
  };

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink to={'info'} onKeyDown={(e) => keyDownHandler(e, 'info')}>
            <InfoIcon />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'settings'}
            onKeyDown={(e) => keyDownHandler(e, 'settings')}
          >
            <SettingsIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to={'play'} onKeyDown={(e) => keyDownHandler(e, 'play')}>
            <PlaybackIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
