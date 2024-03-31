import styles from './Settings.module.scss';

import { accidentalLevels, difficultyLevels } from '../data/harmonies';
import Select from '../components/settings/Select';
import Volume from '../components/settings/Volume';
import Reset from '../components/settings/Reset';
import {
  AccidentalLevelType,
  BeatsPerChordType,
  BeatsPerMinuteType,
  DifficultyLevelType,
} from '../@types';
import { bpcOptions, bpmOptions } from '../data/beats';

const Settings = () => {
  return (
    <>
      <h2>settings</h2>
      <div className={styles.reset}>
        <Reset />
      </div>
      <div className={styles.settings}>
        <h3>metronome</h3>
        <div>
          <Select<BeatsPerChordType>
            dispatchActionType='SET_BPC'
            payloadKey='beatsPerChord'
            options={bpcOptions}
            description='beats / chord'
            descriptionSingle='beat / chord'
          />
          <Volume />
          <Select<BeatsPerMinuteType>
            dispatchActionType='SET_BPM'
            payloadKey='beatsPerMinute'
            options={bpmOptions}
            description='bpm'
          />
        </div>
        <h3>difficulty</h3>
        <div>
          <Select<DifficultyLevelType>
            dispatchActionType='SET_DIFFICULTY_MIN'
            payloadKey='difficultyMin'
            options={difficultyLevels}
          />
          <span>&mdash;</span>
          <Select<DifficultyLevelType>
            dispatchActionType='SET_DIFFICULTY_MAX'
            payloadKey='difficultyMax'
            options={difficultyLevels}
          />
        </div>
        <h3>accidentals</h3>
        <div>
          <Select<AccidentalLevelType>
            dispatchActionType='SET_ACCIDENTALS_MIN'
            payloadKey='accidentalsMin'
            options={accidentalLevels}
          />
          <span>&mdash;</span>
          <Select<AccidentalLevelType>
            dispatchActionType='SET_ACCIDENTALS_MAX'
            payloadKey='accidentalsMax'
            options={accidentalLevels}
          />
        </div>
      </div>
    </>
  );
};

export default Settings;
