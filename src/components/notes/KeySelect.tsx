import { Accidental, Alphabet, Key } from '../../@types';
import { keyToString, stringToKey } from '../../functions/chordFunctions';
import Select from '../misc/Select';

const KeySelect = () => {
  const baseOptions: Alphabet[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  const accidentalOptions: Accidental[] = ['b', undefined, '#'];

  const keyOptions: Key[] = baseOptions
    .map((base) =>
      accidentalOptions.map((accidental) => {
        return { base, accidental };
      })
    )
    .flat()
    // there are no such keys as Fb, E# or B#
    .filter((key) => !(key.base === 'F' && key.accidental === 'b'))
    .filter((key) => !(key.base === 'E' && key.accidental === '#'))
    .filter((key) => !(key.base === 'B' && key.accidental === '#'))
    .reverse();

  return (
    <Select
      dispatchActionType='SET_NOTES_KEY'
      payloadKey='notesKey'
      options={keyOptions}
      optionToString={keyToString}
      stringToOption={stringToKey}
    />
  );
};

export default KeySelect;
