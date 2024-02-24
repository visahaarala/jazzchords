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
}>({
  extensionLevelsState: [[], () => {}],
  accidentalLevelsState: [[], () => {}],
});

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const extensionLevelsState = useState<ExtensionLevel[]>([]);
  const accidentalLevelsState = useState<AccidentalLevel[]>([]);

  const value = {
    extensionLevelsState,
    accidentalLevelsState,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
