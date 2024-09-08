// import { Alphabet } from '../@types';
import { Alphabet } from '../@types';
import styles from './Notes.module.scss';

const Notes = () => {
  // make a list of all possible keys...
  // const keys: Alphabet[] = ['A','B','C','D','E','F','G'];

  const initialArray = ['a', 'b', 'c'] as const;

  type ArrType = typeof initialArray[number];

  const newArray: ArrType[] = ['a']

  // console.log(initialArray[0]);

  initialArray.forEach(item => console.log(item));

  return (
    <div className={styles.notes}>
      <select />
    </div>
  );
};

export default Notes;
