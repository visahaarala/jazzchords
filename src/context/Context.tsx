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
  beatsPerMinuteState: [number, Dispatch<SetStateAction<number>>];
  volumeIsOnState: [boolean, Dispatch<SetStateAction<boolean>>];
  chordState: [string, Dispatch<SetStateAction<string>>];
  // darkModeState: [boolean, Dispatch<SetStateAction<boolean>>];
}>({
  extensionLevelsState: [[], () => {}],
  accidentalLevelsState: [[], () => {}],
  beatsPerChordState: [0, () => {}],
  beatsPerMinuteState: [0, () => {}],
  volumeIsOnState: [false, () => {}],
  chordState: ['', () => {}],
  // darkModeState: [false, () => {}],
});

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const extensionLevelsState = useState<ExtensionLevel[]>([]);
  const accidentalLevelsState = useState<AccidentalLevel[]>([]);
  const beatsPerChordState = useState(bpcOptions[0]);
  const beatsPerMinuteState = useState(bpmOptions[0]);
  const volumeIsOnState = useState(false);
  const chordState = useState('');
  // const darkModeState = useState(false);

  const value = {
    extensionLevelsState,
    accidentalLevelsState,
    beatsPerChordState,
    beatsPerMinuteState,
    volumeIsOnState,
    chordState,
    // darkModeState,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
