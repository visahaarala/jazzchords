import ExtensionSelect from '../components/notes/ExtensionSelect';
import KeySelect from '../components/notes/KeySelect';
import styles from './Notes.module.scss';
import Notation from '../components/svg/notation/Notation';
import ChordSymbol from '../components/chord/ChordSymbol';

const Notes = () => {
  return (
    <div className={styles.notes}>
      <div className={styles.notation}>
        <Notation />
      </div>
      <div className={styles.chord}>
        <ChordSymbol />
      </div>
      <div className={styles.select}>
        <KeySelect />
        <ExtensionSelect />
      </div>
    </div>
  );
};

export default Notes;
