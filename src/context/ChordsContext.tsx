import { Dispatch, FC, ReactNode, createContext, useReducer } from 'react';
import {
  AccidentalLevel,
  DifficultyLevel,
  ProgramState,
  ReducerAction,
} from '../@types';
import {
  accidentalLevels,
  allDifficultyLevels,
  generateChords,
  generateExtensionsShuffled,
  generateKeysShuffled,
} from '../data/harmonies';

const initialState = (): ProgramState => {
  let state: ProgramState = {
    isMuted: false,
    difficultyMin: 'easy',
    difficultyMax: 'medium',
    accidentalsMin: '0',
    accidentalsMax: '7',
    chordIndex: 0,
    beatsPerChord: '4',
    beatsPerMinute: '60',
    beat: 0,
    // generate these below
    majorsShuffled: [],
    minorsShuffled: [],
    extensionsShuffled: [],
    chords: [],
  };
  state = {
    ...state,
    ...generateKeysShuffled(state),
    ...generateExtensionsShuffled(state),
  };
  state = {
    ...state,
    ...generateChords({ number: 2, state }),
  };
  return state;
};

const getStateWithUpdatedRangeAndChords = <T,>({
  action,
  payloadKey,
  state,
  stateKey,
  list,
  inverse,
}: {
  action: ReducerAction;
  payloadKey: keyof ProgramState;
  state: ProgramState;
  stateKey: keyof ProgramState;
  list: T[];
  inverse: boolean;
}): ProgramState => {
  const payloadValue = action.payload![payloadKey] as T;
  const stateValue = state[stateKey] as T;
  const payloadValueIsGreateThanStateValue =
    list.indexOf(payloadValue) > list.indexOf(stateValue);
  let newStateValue = stateValue;
  if (inverse !== payloadValueIsGreateThanStateValue) {
    newStateValue = payloadValue;
  }
  let newState = {
    ...state,
    [payloadKey]: payloadValue,
    [stateKey]: newStateValue,
  };
  newState = {
    ...newState,
    ...generateKeysShuffled(newState),
    ...generateExtensionsShuffled(newState),
  };
  newState = {
    ...newState,
    ...generateChords({ number: 2, state: newState }),
    chordIndex: 0,
  };
  return newState;
};

const reducer = (state: ProgramState, action: ReducerAction): ProgramState => {
  switch (action.type) {
    /// SETTINGS
    case 'SET_BPC': {
      const bpc = action.payload!.beatsPerChord!;
      return {
        ...state,
        beatsPerChord: bpc,
        beat: bpc === '1' ? 1 : 0,
      };
    }
    case 'SET_BPM': {
      return { ...state, beatsPerMinute: action.payload!.beatsPerMinute! };
    }
    case 'SET_MUTED': {
      return { ...state, isMuted: action.payload!.isMuted! };
    }
    case 'SET_DIFFICULTY_MIN': {
      // first create a random list of available extensions
      // reset the favorites list

      return getStateWithUpdatedRangeAndChords<DifficultyLevel>({
        action,
        payloadKey: 'difficultyMin',
        state,
        stateKey: 'difficultyMax',
        list: allDifficultyLevels,
        inverse: false,
      });
    }
    case 'SET_DIFFICULTY_MAX': {
      return getStateWithUpdatedRangeAndChords<DifficultyLevel>({
        action,
        payloadKey: 'difficultyMax',
        state,
        stateKey: 'difficultyMin',
        list: allDifficultyLevels,
        inverse: true,
      });
    }
    case 'SET_ACCIDENTALS_MIN': {
      console.log('SET_ACCIDENTALS_MIN');
      return getStateWithUpdatedRangeAndChords<AccidentalLevel>({
        action,
        payloadKey: 'accidentalsMin',
        state,
        stateKey: 'accidentalsMax',
        list: accidentalLevels,
        inverse: false,
      });
    }
    case 'SET_ACCIDENTALS_MAX': {
      return getStateWithUpdatedRangeAndChords<AccidentalLevel>({
        action,
        payloadKey: 'accidentalsMax',
        state,
        stateKey: 'accidentalsMin',
        list: accidentalLevels,
        inverse: true,
      });
    }
    case 'RESET_SETTINGS': {
      return initialState();
    }

    /// PLAYER
    case 'SET_BEAT': {
      return { ...state, beat: action.payload!.beat! };
    }
    case 'INCREMENT_BEAT': {
      return { ...state, beat: state.beat + 1 };
    }
    case 'APPEND_CHORD_LIST': {
      return {
        ...state,
        ...generateChords({ number: 1, state, append: true }),
        chordIndex: state.chordIndex + 1,
      };
    }
    case 'INCREMENT_CHORD_INDEX': {
      return { ...state, chordIndex: state.chordIndex + 1 };
    }
    case 'DECREMENT_CHORD_INDEX': {
      return { ...state, chordIndex: state.chordIndex - 1 };
    }
    default: {
      return state;
    }
  }
};

export const ChordsContext = createContext<{
  state: ProgramState;
  dispatch: Dispatch<ReducerAction>;
}>({
  state: initialState(),
  dispatch: () => {},
});

const ChordsContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());
  return (
    <ChordsContext.Provider value={{ state, dispatch }}>
      {children}
    </ChordsContext.Provider>
  );
};

export default ChordsContextProvider;
