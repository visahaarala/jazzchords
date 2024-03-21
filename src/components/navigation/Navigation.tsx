import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink to='info'>info</NavLink>
        </li>
        <li>
          <NavLink to='settings'>settings</NavLink>
        </li>
        <li>
          <NavLink to=''>chords</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
