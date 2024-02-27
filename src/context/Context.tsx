import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { AccidentalLevel, Chord, ExtensionLevel } from '../@types';
import { bpcOptions, bpmOptions } from '../data/tempo';

export const Context = createContext<{
  extensionLevelsState: [
    ExtensionLevel[],
    Dispatch<SetStateAction<ExtensionLevel[]>>
  ];
  accidentalLevelsState: [
    AccidentalLevel[],
    Dispatch<SetStateAction<AccidentalLevel[]>>
  ];
  beatsPerChordState: [number, Dispatch<SetStateAction<number>>];
  beatsPerMinuteState: [number, Dispatch<SetStateAction<number>>];
  volumeIsOnState: [boolean, Dispatch<SetStateAction<boolean>>];
  chordListState: [Chord[], Dispatch<SetStateAction<Chord[]>>];
  chordIndexState: [number, Dispatch<SetStateAction<number>>];
  // darkModeState: [boolean, Dispatch<SetStateAction<boolean>>];
}>({
  extensionLevelsState: [[], () => {}],
  accidentalLevelsState: [[], () => {}],
  beatsPerChordState: [0, () => {}],
  beatsPerMinuteState: [0, () => {}],
  volumeIsOnState: [false, () => {}],
  chordListState: [[], () => {}],
  chordIndexState: [0, () => {}],
  // darkModeState: [false, () => {}],
});

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const extensionLevelsState = useState<ExtensionLevel[]>([]);
  const accidentalLevelsState = useState<AccidentalLevel[]>([]);
  const beatsPerChordState = useState(bpcOptions[0]);
  const beatsPerMinuteState = useState(bpmOptions[0]);
  const volumeIsOnState = useState(false);
  const chordListState = useState<Chord[]>([]);
  const chordIndexState = useState(0);
  // const darkModeState = useState(false);

  const value = {
    extensionLevelsState,
    accidentalLevelsState,
    beatsPerChordState,
    beatsPerMinuteState,
    volumeIsOnState,
    chordListState,
    chordIndexState,
    // darkModeState,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
