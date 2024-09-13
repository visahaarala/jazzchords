import styles from './PlaySettings.module.scss';

import {
  accidentalLevels,
  difficultyLevels,
} from '../../../functions/chordFunctions';
import Select from '../../misc/Select';
import {
  AccidentalLevel,
  BeatsPerChord,
  BeatsPerMinute,
  DifficultyLevel,
} from '../../../@types';
import { bpcOptions, bpmOptions } from '../../../data/beats';
import PlayerMute from './PlayerMute';
import OnOffToggle from '../../misc/OnOffToggle';
import { randomTopNotes } from '../../../functions/noteFunctions';
import { useContext } from 'react';
import { ChordsContext } from '../../../context/ChordsContext';
import ClefSelector from '../../misc/ClefSelector';

const PlaySettings = () => {
  const { showRandomTopNote, playerClef } = useContext(ChordsContext).state;

  return (
    <div className={styles.settings}>
      <h3>Random top note</h3>
      <div>
        <OnOffToggle
          dispatchType='TOGGLE_SHOW_RANDOM_TOP_NOTE'
          stateKey='showRandomTopNote'
        />
        <span className={styles.space} />
        <Select<string>
          dispatchActionType='SET_RANDOM_TOP_NOTE_MIN'
          payloadKey='randomTopNoteMin'
          options={
            playerClef === 'treble'
              ? randomTopNotes.slice(5, -7)
              : randomTopNotes.slice(0, -(7 + 5))
          }
          disabled={!showRandomTopNote}
        />
        <span>&mdash;</span>
        <Select<string>
          dispatchActionType='SET_RANDOM_TOP_NOTE_MAX'
          payloadKey='randomTopNoteMax'
          options={playerClef === 'treble' ? randomTopNotes.slice(7 + 5): randomTopNotes.slice(7, -5)}
          disabled={!showRandomTopNote}
        />
        <span className={styles.space} />
        <ClefSelector
          dispatchType='SET_PLAYER_CLEF'
          payloadKey='playerClef'
          disabled={!showRandomTopNote}
        />
      </div>

      <h3>Time signature & tempo</h3>
      <div>
        <Select<BeatsPerChord>
          dispatchActionType='SET_BPC'
          payloadKey='beatsPerChord'
          options={bpcOptions}
          description='/ 4'
        />
        <PlayerMute />
        <Select<BeatsPerMinute>
          dispatchActionType='SET_BPM'
          payloadKey='beatsPerMinute'
          options={bpmOptions}
          description='bpm'
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

      <h3>Show next chord</h3>
      <div>
        <OnOffToggle
          dispatchType='TOGGLE_SHOW_NEXT_CHORD'
          stateKey='showNextChord'
        />
      </div>
    </div>
  );
};

export default PlaySettings;
