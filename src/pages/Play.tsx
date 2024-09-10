import styles from './Play.module.scss';
import SettingsIcon from '../components/svg/icons/SettingsIcon';
import Player from '../components/play/player/Player';
import { useState } from 'react';
import Settings from '../components/play/settings/Settings';

const Play = () => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className={styles.play}>
      <div className={styles.settingsIcon} onClick={toggleSettings}>
        <SettingsIcon />
      </div>
      {showSettings ? <Settings /> : <Player />}
    </div>
  );
};

export default Play;
