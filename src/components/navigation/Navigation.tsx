import styles from './Navigation.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import SettingsIcon from './SettingsIcon';
import InfoIcon from './InfoIcon';
import ChordIcon from './ChordIcon';
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
          <NavLink to='info' onKeyDown={(e) => keyDownHandler(e, 'info')}>
            <InfoIcon />
          </NavLink>
        </li>
        <li>
          <NavLink
            to='settings'
            onKeyDown={(e) => keyDownHandler(e, 'settings')}
          >
            <SettingsIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to='' onKeyDown={(e) => keyDownHandler(e, '')}>
            <ChordIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
