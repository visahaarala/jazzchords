import styles from './Play.module.scss';
import SettingsIcon from '../components/svg/icons/SettingsIcon';
import Player from '../components/play/player/Player';
import Settings from '../components/play/settings/Settings';
import { useState } from 'react';

const Play = () => {
  const [showSettings, setShowSettings] = useState(false);

  const keyPressHandler = (code: string) => {
    if (code === 'Space' || code === 'Enter') {
      setShowSettings(!showSettings);
    }
  };

  return (
    <div className={styles.play}>
      <div
        className={'iconButton ' + styles.settingsButton}
        onClick={() => setShowSettings(!showSettings)}
        onKeyDown={(e) => keyPressHandler(e.code)}
        tabIndex={0}
        style={
          showSettings
            ? { transform: 'rotate(20deg)', transition: 'transform .2s' }
            : { transition: 'transform .2s' }
        }
      >
        <SettingsIcon />
      </div>
      {!showSettings ? <Player /> : <Settings />}
    </div>
  );
};

export default Play;
