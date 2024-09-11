import styles from './Play.module.scss';
import SettingsIcon from '../components/svg/icons/SettingsIcon';
import Player from '../components/play/player/Player';
import PlaySettings from '../components/play/settings/PlaySettings';
import { useContext } from 'react';
import { ChordsContext } from '../context/ChordsContext';

const Play = () => {
  const { state, dispatch } = useContext(ChordsContext);
  const viewSettings = state.viewPlaySettings;

  const toggleSettings = () => {
    dispatch({ type: 'TOGGLE_VIEW_PLAY_SETTINGS' });
  };

  const keyPressHandler = (code: string) => {
    if (code === 'Space' || code === 'Enter') {
      toggleSettings();
    }
  };

  return (
    <div className={styles.play}>
      {!viewSettings ? <Player /> : <PlaySettings />}
      <div
        className={'iconButton ' + styles.settingsButton}
        onClick={toggleSettings}
        onKeyDown={(e) => keyPressHandler(e.code)}
        tabIndex={0}
        style={
          viewSettings
            ? { transform: 'rotate(20deg)', transition: 'transform .2s' }
            : { transition: 'transform .2s' }
        }
      >
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Play;
