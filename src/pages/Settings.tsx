import styles from './Settings.module.scss';

import { accidentalLevels, difficultyLevels } from '../data/harmonies';
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
      <div className={styles.settings}>
        <h3>Key signature (♯ / ♭)</h3>
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

        <h3>Chord difficulty</h3>
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

        <h3>Time signature & metronome</h3>
        <div>
          <Select<BeatsPerChord>
            dispatchActionType='SET_BPC'
            payloadKey='beatsPerChord'
            options={bpcOptions}
            description='/ 4'
          />
          <Volume />
          <Select<BeatsPerMinute>
            dispatchActionType='SET_BPM'
            payloadKey='beatsPerMinute'
            options={bpmOptions}
            description='bpm'
          />
        </div>
      </div>
    </>
  );
};

export default Settings;
