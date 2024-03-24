import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import {
  AccidentalLevel,
  Chord,
  ExtensionLevel,
  TimeSignature,
} from '../@types';
import { bpcOptions, bpmOptions } from '../data/tempo';
import { generateChords } from '../data/harmonies';

export const Context = createContext<{
  accidentalRange: [AccidentalLevel, AccidentalLevel];
  setAccidentalRange: (range: [AccidentalLevel, AccidentalLevel]) => void;
  extensionRange: [ExtensionLevel, ExtensionLevel];
  setExtensionRange: (range: [ExtensionLevel, ExtensionLevel]) => void;
  beatsPerChordState: [TimeSignature, Dispatch<SetStateAction<TimeSignature>>];
  beatsPerMinuteState: [number, Dispatch<SetStateAction<number>>];
  isMutedState: [boolean, Dispatch<SetStateAction<boolean>>];
  chordListState: [Chord[], Dispatch<SetStateAction<Chord[]>>];
  chordIndexState: [number, Dispatch<SetStateAction<number>>];
  beatState: [number, Dispatch<SetStateAction<number>>];
}>({
  accidentalRange: ['0', '4'],
  setAccidentalRange: () => {},
  extensionRange: ['easy', 'medium'],
  setExtensionRange: () => {},
  beatsPerChordState: [0, () => {}],
  beatsPerMinuteState: [0, () => {}],
  isMutedState: [true, () => {}],
  chordListState: [[], () => {}],
  chordIndexState: [0, () => {}],
  beatState: [0, () => {}],
});

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const accidentalRangeState = useState<[AccidentalLevel, AccidentalLevel]>([
    '0',
    '4',
  ]);
  const extensionRangeState = useState<[ExtensionLevel, ExtensionLevel]>([
    'easy',
    'medium',
  ]);
  const beatsPerChordState = useState(bpcOptions[3]);
  const beatsPerMinuteState = useState(bpmOptions[13]);
  const isMutedState = useState(false);
  const chordListState = useState<Chord[]>([]);
  const chordIndexState = useState(0);
  const beatState = useState(0);

  useEffect(() => {
    chordListState[1](
      generateChords({
        extensionRange: extensionRangeState[0],
        accidentalRange: accidentalRangeState[0],
        numberOfChords: 2,
      })
    );
  }, []);

  const setAccidentalRange = (range: [AccidentalLevel, AccidentalLevel]) => {
    accidentalRangeState[1](range);
    chordListState[1](
      generateChords({
        extensionRange: extensionRangeState[0],
        accidentalRange: range,
        numberOfChords: 2,
      })
    );
    chordIndexState[1](0);
  };

  const setExtensionRange = (range: [ExtensionLevel, ExtensionLevel]) => {
    extensionRangeState[1](range);
    chordListState[1](
      generateChords({
        extensionRange: range,
        accidentalRange: accidentalRangeState[0],
        numberOfChords: 2,
      })
    );
    chordIndexState[1](0);
  };

  const value = {
    accidentalRange: accidentalRangeState[0],
    setAccidentalRange,
    extensionRange: extensionRangeState[0],
    setExtensionRange,
    beatsPerChordState,
    beatsPerMinuteState,
    isMutedState,
    chordListState,
    chordIndexState,
    beatState,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
