import styles from './Navigation.module.scss';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { CSSProperties, KeyboardEvent } from 'react';
import SettingsIcon from '../icons/navigation/SettingsIcon';
import InfoIcon from '../icons/navigation/InfoIcon';
import PlaybackIcon from '../icons/navigation/PlaybackIcon';
import MetronomeIcon from '../icons/navigation/MetronomeIcon';

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  const keyDownHandler = (
    e: KeyboardEvent<HTMLAnchorElement>,
    target: string
  ) => {
    if (e.code === 'Space') {
      navigate(target);
    }
  };

  const activeStyle = (paths: string[]): CSSProperties => {
    const style: CSSProperties = {};
    for (const path of paths) {
      if (path === pathname) {
        style.color = 'var(--color-link)';
      }
    }
    return style;
  };

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink to={'info'} onKeyDown={(e) => keyDownHandler(e, 'info')}>
            <InfoIcon style={activeStyle(['/info'])} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'metronome'}
            onKeyDown={(e) => keyDownHandler(e, 'metronome')}
          >
            <MetronomeIcon style={activeStyle(['/metronome'])} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'settings'}
            onKeyDown={(e) => keyDownHandler(e, 'settings')}
          >
            <SettingsIcon style={activeStyle(['/settings'])} />
          </NavLink>
        </li>
        <li>
          <NavLink to={'play'} onKeyDown={(e) => keyDownHandler(e, 'play')}>
            <PlaybackIcon style={activeStyle(['/play', '/'])} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
