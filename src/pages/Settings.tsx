import styles from './Settings.module.scss';

import { accidentalLevels, difficultyLevels } from '../data/harmonies';
import Reset from '../components/settings/Reset';
import Select from '../components/settings/Select';
import Volume from '../components/settings/Volume';
import {
  AccidentalLevel,
  BeatsPerChord,
  BeatsPerMinute,
  DifficultyLevel,
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
          <Select<BeatsPerChord>
            dispatchActionType='SET_BPC'
            payloadKey='beatsPerChord'
            options={bpcOptions}
            description='beats / chord'
            descriptionSingle='beat / chord'
          />
          <Volume />
          <Select<BeatsPerMinute>
            dispatchActionType='SET_BPM'
            payloadKey='beatsPerMinute'
            options={bpmOptions}
            description='bpm'
          />
        </div>
        <h3>difficulty</h3>
        <div>
          <Select<DifficultyLevel>
            dispatchActionType='SET_DIFFICULTY_MIN'
            payloadKey='difficultyMin'
            options={difficultyLevels}
          />
          <span>&mdash;</span>
          <Select<DifficultyLevel>
            dispatchActionType='SET_DIFFICULTY_MAX'
            payloadKey='difficultyMax'
            options={difficultyLevels}
          />
        </div>
        <h3>accidentals</h3>
        <div>
          <Select<AccidentalLevel>
            dispatchActionType='SET_ACCIDENTALS_MIN'
            payloadKey='accidentalsMin'
            options={accidentalLevels}
          />
          <span>&mdash;</span>
          <Select<AccidentalLevel>
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
