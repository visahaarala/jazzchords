import styles from './Navigation.module.scss';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { KeyboardEvent } from 'react';
import InfoIcon from '../svg/icons/InfoIcon';
import MetronomeIcon from '../svg/icons/MetronomeIcon';
import PlayIcon from '../svg/icons/PlayIcon';
import NotesIcon from '../svg/icons/NotesIcon';

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const keyDownHandler = (e: KeyboardEvent<HTMLLIElement>, target: string) => {
    if (e.code === 'Space') {
      e.preventDefault();
      navigate(target);
    }
  };

  const navIcons = {
    info: <InfoIcon />,
    notes: <NotesIcon />,
    play: <PlayIcon />,
    metronome: <MetronomeIcon />,
  };

  const liStyle = (navName: string): React.CSSProperties | undefined => {
    if ('/' + navName === pathname) {
      return { color: 'var(--color-link)' };
    } else {
      return { color: 'currentColor' };
    }
  };

  return (
    <nav className={styles.navigation}>
      <ul>
        {Object.keys(navIcons).map((key) => {
          return (
            <li
              key={key}
              style={liStyle(key)}
              tabIndex={0}
              onKeyDown={(e) => keyDownHandler(e, key)}
            >
              <NavLink
                to={key}
                style={liStyle(key)}
                aria-label={key}
                tabIndex={-1}
              >
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
