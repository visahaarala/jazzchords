import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export const MetronomeContext = createContext<{
  tempoState: [number, Dispatch<SetStateAction<number>>];
  mutedState: [boolean, Dispatch<SetStateAction<boolean>>];
  flashState: [boolean, Dispatch<SetStateAction<boolean>>];
}>({
  tempoState: [60, () => {}],
  mutedState: [false, () => {}],
  flashState: [false, () => {}],
});

const MetronomeContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const tempoState = useState(60);
  const mutedState = useState(false);
  const flashState = useState(false);

  return (
    <MetronomeContext.Provider value={{ tempoState, mutedState, flashState }}>
      {children}
    </MetronomeContext.Provider>
  );
};

export default MetronomeContextProvider;
