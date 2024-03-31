import { Dispatch, FC, ReactNode, createContext, useReducer } from 'react';
import {
  AccidentalLevel,
  DifficultyLevel,
  ProgramState,
  ReducerAction,
} from '../@types';
import {
  accidentalLevels,
  difficultyLevels,
  generateChords,
} from '../data/harmonies';

const initialState = (): ProgramState => {
  const state: ProgramState = {
    isMuted: false,
    difficultyMin: 'easy',
    difficultyMax: 'medium',
    accidentalsMin: '0',
    accidentalsMax: '4',
    chordList: [],
    chordIndex: 0,
    beatsPerChord: '4',
    beatsPerMinute: '60',
    beat: 0,
  };
  return { ...state, chordList: generateChords(2, state) };
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
  const newState = {
    ...state,
    [payloadKey]: payloadValue,
    [stateKey]: newStateValue,
  };
  return {
    ...newState,
    chordList: generateChords(2, newState),
    chordIndex: 0,
  };
};

const reducer = (
  state: ProgramState,
  action: ReducerAction
): ProgramState => {
  switch (action.type) {
    /// SETTINGS
    case 'SET_BPC': {
      return { ...state, beatsPerChord: action.payload!.beatsPerChord! };
    }
    case 'SET_BPM': {
      return { ...state, beatsPerMinute: action.payload!.beatsPerMinute! };
    }
    case 'SET_MUTED': {
      return { ...state, isMuted: action.payload!.isMuted! };
    }
    case 'SET_DIFFICULTY_MIN': {
      return getStateWithUpdatedRangeAndChords<DifficultyLevel>({
        action,
        payloadKey: 'difficultyMin',
        state,
        stateKey: 'difficultyMax',
        list: difficultyLevels,
        inverse: false,
      });
    }
    case 'SET_DIFFICULTY_MAX': {
      return getStateWithUpdatedRangeAndChords<DifficultyLevel>({
        action,
        payloadKey: 'difficultyMax',
        state,
        stateKey: 'difficultyMin',
        list: difficultyLevels,
        inverse: true,
      });
    }
    case 'SET_ACCIDENTALS_MIN': {
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
    case 'RESET_BEAT': {
      return { ...state, beat: action.payload!.beat! };
    }
    case 'INCREMENT_BEAT': {
      return { ...state, beat: state.beat + 1 };
    }
    case 'SET_BEAT': {
      return { ...state, beat: action.payload!.beat! };
    }
    case 'APPEND_CHORD_LIST': {
      return {
        ...state,
        chordList: [...state.chordList, generateChords(1, state)[0]],
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

export const ReducerContext = createContext<{
  state: ProgramState;
  dispatch: Dispatch<ReducerAction>;
}>({
  state: initialState(),
  dispatch: () => {},
});

const ReducerContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());
  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};

export default ReducerContextProvider;
