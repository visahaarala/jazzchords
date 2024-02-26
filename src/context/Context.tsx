import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { AccidentalLevel, ExtensionLevel } from '../@types';

export const Context = createContext<{
  extensionLevelsState: [
    ExtensionLevel[],
    Dispatch<SetStateAction<ExtensionLevel[]>>
  ];
  accidentalLevelsState: [
    AccidentalLevel[],
    Dispatch<SetStateAction<AccidentalLevel[]>>
  ];
  volumeIsOnState: [boolean, Dispatch<SetStateAction<boolean>>];
  darkModeState: [boolean, Dispatch<SetStateAction<boolean>>];
  chordState: [string, Dispatch<SetStateAction<string>>];
}>({
  extensionLevelsState: [[], () => {}],
  accidentalLevelsState: [[], () => {}],
  volumeIsOnState: [false, () => {}],
  darkModeState: [false, () => {}],
  chordState: ['', () => {}],
});

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const extensionLevelsState = useState<ExtensionLevel[]>([]);
  const accidentalLevelsState = useState<AccidentalLevel[]>([]);
  const volumeIsOnState = useState(false);
  const darkModeState = useState(false);
  const chordState = useState('');

  const value = {
    extensionLevelsState,
    accidentalLevelsState,
    volumeIsOnState,
    darkModeState,
    chordState,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
