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

const defaults: SearchParams = {
  bpc: bpcOptions[3],
  bpm: bpmOptions[13],
  isMuted: false,
  amin: '0',
  amax: '4',
  dmin: 'easy',
  dmax: 'hard',
};

export const Context = createContext<{
  searchParamsState: [SearchParams, Dispatch<SetStateAction<SearchParams>>];
  accidentalRange: [AccidentalLevel, AccidentalLevel];
  setAccidentalRange: (range: [AccidentalLevel, AccidentalLevel]) => void;
  extensionRange: [ExtensionLevel, ExtensionLevel];
  setExtensionRange: (range: [ExtensionLevel, ExtensionLevel]) => void;
  beatsPerChord: TimeSignature;
  setBeatsPerChord: (timeSignature: TimeSignature) => void;
  beatsPerMinuteState: [number, Dispatch<SetStateAction<number>>];
  isMutedState: [boolean, Dispatch<SetStateAction<boolean>>];
  chordListState: [Chord[], Dispatch<SetStateAction<Chord[]>>];
  chordIndexState: [number, Dispatch<SetStateAction<number>>];
  beatState: [number, Dispatch<SetStateAction<number>>];
}>({
  searchParamsState: [defaults, () => {}],
  accidentalRange: ['0', '4'],
  setAccidentalRange: () => {},
  extensionRange: ['easy', 'medium'],
  setExtensionRange: () => {},
  beatsPerChord: '4',
  setBeatsPerChord: () => {},
  beatsPerMinuteState: [0, () => {}],
  isMutedState: [true, () => {}],
  chordListState: [[], () => {}],
  chordIndexState: [0, () => {}],
  beatState: [0, () => {}],
});

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // setup states with valid values
  const searchParamsState = useState<SearchParams>(defaults);

  const accidentalRangeState = useState<[AccidentalLevel, AccidentalLevel]>([
    defaults.amin,
    defaults.amax,
  ]);
  const extensionRangeState = useState<[ExtensionLevel, ExtensionLevel]>([
    defaults.dmin,
    defaults.dmax,
  ]);
  const beatsPerChordState = useState<TimeSignature>(defaults.bpc);
  const beatsPerMinuteState = useState(defaults.bpm);
  const isMutedState = useState(defaults.isMuted);
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

  const setBeatsPerChord = (timeSignature: TimeSignature) => {
    beatsPerChordState[1](timeSignature);
    beatState[1](0);
  };

  // read url search query parameters
  const [searchParams] = useSearchParams();
  useEffect(() => {
    console.log('useEffect');
    const bpc = searchParams.get('bpc');
    const bpm = searchParams.get('bpm');
    const isMuted = searchParams.get('isMuted');
    const amin = searchParams.get('amin');
    const amax = searchParams.get('amax');
    const dmin = searchParams.get('dmin');
    const dmax = searchParams.get('dmax');
    // check if parameters are valid and update state
    const isMutedValue = isMuted
      ? isMuted === 'true'
        ? true
        : false
      : defaults.isMuted;
    isMutedState[1](isMutedValue);

    const bpcValue =
      bpc && bpcOptions.includes(bpc as TimeSignature)
        ? (bpc as TimeSignature)
        : defaults.bpc;
    setBeatsPerChord(bpcValue);

    const bpmValue =
      Number(bpm) && bpmOptions.includes(Number(bpm))
        ? Number(bpm)
        : bpmOptions[13];
    let aminValue =
      amin && Object.keys(basesOrganized).includes(amin) ? amin : '0';
    let amaxValue =
      amax && Object.keys(basesOrganized).includes(amax) ? amax : '4';
    if (aminValue > amaxValue) {
      aminValue = '0';
      amaxValue = '4';
    }
    const extensionsKeys = Object.keys(extensionsOrganized);
    let dminValue = dmin && extensionsKeys.includes(dmin) ? dmin : 'easy';
    let dmaxValue = dmax && extensionsKeys.includes(dmax) ? dmax : 'medium';
    if (extensionsKeys.indexOf(dminValue) > extensionsKeys.indexOf(dmaxValue)) {
      dminValue = 'easy';
      dmaxValue = 'medium';
    }
  }, [searchParams]);

  const value = {
    searchParamsState,
    accidentalRange: accidentalRangeState[0],
    setAccidentalRange,
    extensionRange: extensionRangeState[0],
    setExtensionRange,
    beatsPerChord: beatsPerChordState[0],
    setBeatsPerChord,
    beatsPerMinuteState,
    isMutedState,
    chordListState,
    chordIndexState,
    beatState,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
