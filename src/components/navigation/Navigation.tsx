import styles from './Navigation.module.scss';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { KeyboardEvent } from 'react';
import InfoIcon from '../svg/icons/InfoIcon';
import MetronomeIcon from '../svg/icons/MetronomeIcon';
import NotesIcon from '../svg/icons/NotesIcon';
import C7 from '../svg/icons/C7';

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>, target: string) => {
    if (e.code === 'Space') {
      e.preventDefault();
      navigate(target);
    }
  };

  const navLinks: { [key: string]: JSX.Element } = {
    info: <InfoIcon />,
    notes: <NotesIcon />,
    play: <C7 />,
    metronome: <MetronomeIcon />,
  };

  const linkStyle = (navName: string): React.CSSProperties | undefined => {
    if ('/' + navName === pathname) {
      return { color: 'var(--color-link)' };
    } else {
      return { color: 'currentColor' };
    }
  };

  return (
    <nav className={styles.nav}>
      {Object.keys(navLinks).map((key) => {
        return (
          <div
            className={styles.nav__link}
            tabIndex={0}
            key={key}
            onKeyDown={(e) => keyDownHandler(e, key)}
          >
            <NavLink
              to={key}
              style={linkStyle(key)}
              aria-label={key}
              tabIndex={-1}
            >
              {navLinks[key as keyof typeof navLinks]}
            </NavLink>
          </div>
        );
      })}
    </nav>
  );
};

export default Navigation;
