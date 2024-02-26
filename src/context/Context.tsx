import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { AccidentalLevel, ExtensionLevel } from '../@types';
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
  beatsPerMeasureState: [number, Dispatch<SetStateAction<number>>];
  volumeIsOnState: [boolean, Dispatch<SetStateAction<boolean>>];
  darkModeState: [boolean, Dispatch<SetStateAction<boolean>>];
  chordState: [string, Dispatch<SetStateAction<string>>];
}>({
  extensionLevelsState: [[], () => {}],
  accidentalLevelsState: [[], () => {}],
  beatsPerChordState: [0, () => {}],
  beatsPerMeasureState: [0, () => {}],
  volumeIsOnState: [false, () => {}],
  darkModeState: [false, () => {}],
  chordState: ['', () => {}],
});

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const extensionLevelsState = useState<ExtensionLevel[]>([]);
  const accidentalLevelsState = useState<AccidentalLevel[]>([]);
  const beatsPerChordState = useState(bpcOptions[0]);
  const beatsPerMeasureState = useState(bpmOptions[0]);
  const volumeIsOnState = useState(false);
  const darkModeState = useState(false);
  const chordState = useState('');

  const value = {
    extensionLevelsState,
    accidentalLevelsState,
    beatsPerChordState,
    beatsPerMeasureState,
    volumeIsOnState,
    darkModeState,
    chordState,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
