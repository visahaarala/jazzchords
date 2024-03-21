import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import SettingsIcon from './SettingsIcon';
import InfoIcon from './InfoIcon';
import ChordIcon from './ChordIcon';

const Navigation = () => {
  // icon "settings-sharp" from
  // https://ionic.io/ionicons with MIT license

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink to='info'>
            <InfoIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to='settings'>
            <SettingsIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to=''><ChordIcon /></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
