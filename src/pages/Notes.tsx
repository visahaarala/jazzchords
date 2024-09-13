import ExtensionSelect from '../components/notes/ExtensionSelect';
import KeySelect from '../components/notes/KeySelect';
import styles from './Notes.module.scss';
import Notation from '../components/svg/notation/Notation';
import ChordSymbol from '../components/chord/ChordSymbol';
import { Chord } from '../@types';
import { useContext } from 'react';
import { ChordsContext } from '../context/ChordsContext';
import { getNotes } from '../functions/noteFunctions';
import ClefSelector from '../components/misc/ClefSelector';

const Notes = () => {
  const { state } = useContext(ChordsContext);

  const key = state.notationKey;
  const extension = state.notationExtension;
  const clef = state.notesClef;

  const chord: Chord = {
    key,
    extension,
    notes: getNotes(key, extension),
  };

  return (
    <div className={styles.notes}>
      <div className={styles.notes__chord}>
        <ChordSymbol chord={chord} size={2.5} />
        <Notation notes={chord.notes} clef={clef} width={15} />
      </div>
      <div className={styles.notes__select}>
        <KeySelect />
        <ExtensionSelect />
        <ClefSelector dispatchType='SET_NOTES_CLEF' payloadKey='notesClef' />
      </div>
    </div>
  );
};

export default Notes;
