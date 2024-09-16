import { useContext } from 'react';
import { Accidental, Alphabet, Key } from '../../@types';
import { keyToString, stringToKey } from '../../functions/chordFunctions';
import Select from '../misc/Select';
import { ChordsContext } from '../../context/ChordsContext';

const KeySelect = () => {
  const clef = useContext(ChordsContext).state.notesClef;

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

  console.log(
    keyOptions.map((ko) => ko.base + (ko.accidental ? ko.accidental : ''))
  );

  // const optionsByClef = (
  //   firstOption: string
  // ): { base: Alphabet; accidental: Accidental }[] => {
  //   const startIndex = keyOptions
  //     .map((opt) => opt.base + (opt.accidental ? opt.accidental : ''))
  //     .indexOf(firstOption);
  //   return [
  //     ...keyOptions.slice(startIndex),
  //     ...keyOptions.slice(0, startIndex),
  //   ];
  // };

  return (
    <Select
      dispatchActionType='SET_NOTATION_KEY'
      payloadKey='notationKey'
      // options={optionsByClef(clef === 'treble' ? 'F#' : 'E')}
      options={keyOptions}
      optionToString={keyToString}
      stringToOption={stringToKey}
    />
  );
};

export default KeySelect;
