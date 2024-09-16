import styles from './Play.module.scss';
import SettingsIcon from '../components/svg/icons/SettingsIcon';
import Player from '../components/play/player/Player';
import PlaySettings from '../components/play/settings/PlaySettings';
import { KeyboardEvent, useContext } from 'react';
import { ChordsContext } from '../context/ChordsContext';

const Play = () => {
  const { state, dispatch } = useContext(ChordsContext);
  const viewSettings = state.viewPlaySettings;

  const toggleSettings = () => {
    dispatch({ type: 'TOGGLE_VIEW_PLAY_SETTINGS' });
  };

  const keyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      toggleSettings();
    }
  };

  return (
    <div className={styles.play}>
      {!viewSettings ? <Player /> : <PlaySettings />}
      <div
        className={'iconButton ' + styles.settingsButton}
        onClick={toggleSettings}
        onKeyDown={(e) => keyPressHandler(e)}
        tabIndex={0}
      >
        <SettingsIcon rotate={viewSettings} />
      </div>
    </div>
  );
};

export default Play;
