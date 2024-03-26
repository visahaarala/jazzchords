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
  Accidentals,
  BeatsPerMinute,
  Chord,
  Difficulty,
  SearchParams,
  TimeSignature,
} from '../@types';
import { bpcOptions, bpmOptions } from '../data/tempo';
import {
  basesOrganized,
  extensionsOrganized,
  generateChords,
} from '../data/harmonies';
import { useSearchParams } from 'react-router-dom';

export const defaults: SearchParams = {
  bpc: bpcOptions[3],
  bpm: bpmOptions[13],
  isMuted: false,
  amin: '0',
  amax: '4',
  dmin: 'easy',
  dmax: 'hard',
};

export const Context = createContext<{
  accidentalsMin: Accidentals;
  setAccidentalsMin: () => void;
  accidentalsMax: Accidentals;
  setAccidentalsMax: () => void;
  difficultyMin: Difficulty;
  setDifficultyMin: () => void;
  difficultyMax: Difficulty;
  setDifficultyMax: () => void;
  beatsPerChordState: [TimeSignature, Dispatch<SetStateAction<TimeSignature>>];
  beatsPerMinuteState: [
    BeatsPerMinute,
    Dispatch<SetStateAction<BeatsPerMinute>>
  ];
  isMutedState: [boolean, Dispatch<SetStateAction<boolean>>];
  chordListState: [Chord[], Dispatch<SetStateAction<Chord[]>>];
  chordIndexState: [number, Dispatch<SetStateAction<number>>];
  beatState: [number, Dispatch<SetStateAction<number>>];
}>({
  accidentalsMin: defaults.amin,
  setAccidentalsMin: () => {},
  accidentalsMax: defaults.amax,
  setAccidentalsMax: () => {},
  difficultyMin: defaults.dmin,
  setDifficultyMin: () => {},
  difficultyMax: defaults.dmax,
  setDifficultyMax: () => {},
  beatsPerChordState: [defaults.bpc, () => {}],
  beatsPerMinuteState: [defaults.bpm, () => {}],
  isMutedState: [false, () => {}],
  chordListState: [[], () => {}],
  chordIndexState: [0, () => {}],
  beatState: [0, () => {}],
});

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const accidentalsMinState = useState<Accidentals>(defaults.amin);
  const accidentalsMaxState = useState<Accidentals>(defaults.amax);
  const difficultyMinState = useState<Difficulty>(defaults.dmin);
  const difficultyMaxState = useState<Difficulty>(defaults.dmax);
  const beatsPerChordState = useState<TimeSignature>(defaults.bpc);
  const beatsPerMinuteState = useState<BeatsPerMinute>(defaults.bpm);
  const isMutedState = useState(defaults.isMuted);
  const chordListState = useState<Chord[]>([]);
  const chordIndexState = useState(0);
  const beatState = useState(0);

  // generate two chords when the program starts
  useEffect(() => {
    // console.log('invoke generateChords');
    chordListState[1](
      generateChords({
        difficultyMin: difficultyMinState[0],
        difficultyMax: difficultyMaxState[0],
        accidentalsMin: accidentalsMinState[0],
        accidentalsMax: accidentalsMaxState[0],
        numberOfChords: 2,
      })
    );
  }, []);

  // const setAccidentalRange = (range: [Accidentals, Accidentals]) => {
  //   accidentalRangeState[1](range);
  //   chordListState[1](
  //     generateChords({
  //       extensionRange: extensionRangeState[0],
  //       accidentalRange: range,
  //       numberOfChords: 2,
  //     })
  //   );
  //   chordIndexState[1](0);
  // };

  // const setExtensionRange = (range: [Difficulty, Difficulty]) => {
  //   extensionRangeState[1](range);
  //   chordListState[1](
  //     generateChords({
  //       extensionRange: range,
  //       accidentalRange: accidentalRangeState[0],
  //       numberOfChords: 2,
  //     })
  //   );
  //   chordIndexState[1](0);
  // };

  // const setBeatsPerChord = (timeSignature: TimeSignature) => {
  //   beatsPerChordState[1](timeSignature);
  //   beatState[1](0);
  // };

  // // the program settings state is update via URL parameters
  // // changes in URL search query will change the program state
  // const [searchParams] = useSearchParams();
  // useEffect(() => {
  //   console.log('searchParams changed - useEffect');
  //   const bpc = searchParams.get('bpc');
  //   const bpm = searchParams.get('bpm');
  //   const isMuted = searchParams.get('isMuted');
  //   const amin = searchParams.get('amin');
  //   const amax = searchParams.get('amax');
  //   const dmin = searchParams.get('dmin');
  //   const dmax = searchParams.get('dmax');

  //   // check if parameters are valid and update state
  //   const isMutedValue = isMuted
  //     ? isMuted === 'true'
  //       ? true
  //       : false
  //     : defaults.isMuted;
  //   isMutedState[1](isMutedValue);

  //   const bpcValue =
  //     bpc && bpcOptions.includes(bpc as TimeSignature)
  //       ? (bpc as TimeSignature)
  //       : defaults.bpc;
  //   setBeatsPerChord(bpcValue);

  //   const bpmValue =
  //     Number(bpm) && bpmOptions.includes(Number(bpm))
  //       ? Number(bpm)
  //       : bpmOptions[13];
  //   console.log('bpmValue', bpmValue);
  //   beatsPerMinuteState[1](bpmValue);

  //   let aminValue =
  //     amin && Object.keys(basesOrganized).includes(amin) ? amin : '0';
  //   let amaxValue =
  //     amax && Object.keys(basesOrganized).includes(amax) ? amax : '4';
  //   if (aminValue > amaxValue) {
  //     aminValue = '0';
  //     amaxValue = '4';
  //   }
  //   setAccidentalRange([aminValue as Accidentals, amaxValue as Accidentals]);

  //   const extensionsKeys = Object.keys(extensionsOrganized);
  //   let dminValue = dmin && extensionsKeys.includes(dmin) ? dmin : 'easy';
  //   let dmaxValue = dmax && extensionsKeys.includes(dmax) ? dmax : 'medium';
  //   if (extensionsKeys.indexOf(dminValue) > extensionsKeys.indexOf(dmaxValue)) {
  //     dminValue = 'easy';
  //     dmaxValue = 'medium';
  //   }
  //   setExtensionRange([dminValue as Difficulty, dmaxValue as Difficulty]);
  // }, [searchParams]);

  const value = {
    accidentalsMin: accidentalsMinState[0],
    setAccidentalsMin: () => {},
    accidentalsMax: accidentalsMaxState[0],
    setAccidentalsMax: () => {},
    difficultyMin: difficultyMinState[0],
    setDifficultyMin: () => {},
    difficultyMax: difficultyMaxState[0],
    setDifficultyMax: () => {},
    beatsPerChordState,
    beatsPerMinuteState,
    isMutedState,
    chordListState,
    chordIndexState,
    beatState,
    // accidentalRange: accidentalRangeState[0],
    // setAccidentalRange,
    // extensionRange: extensionRangeState[0],
    // setExtensionRange,
    // beatsPerChord: beatsPerChordState[0],
    // beatsPerMinute: beatsPerMinuteState[0],
    // isMuted: isMutedState[0],
    // chordListState,
    // chordIndexState,
    // beatState,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
