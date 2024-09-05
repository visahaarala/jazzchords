import styles from './Chord.module.scss';
import { cloneElement, useContext } from 'react';
import { ChordsContext } from '../../context/ChordsContext';
import Bracket from '../svg/symbols/extensions/Bracket';
import A from '../svg/symbols/keys/A';
import B from '../svg/symbols/keys/B';
import C from '../svg/symbols/keys/C';
import D from '../svg/symbols/keys/D';
import E from '../svg/symbols/keys/E';
import F from '../svg/symbols/keys/F';
import G from '../svg/symbols/keys/G';
import Flat from '../svg/symbols/extensions/Flat';
import { Alphabet, ExtensionText } from '../../@types';
import Sharp from '../svg/symbols/extensions/Sharp';
import Minor from '../svg/symbols/keys/Minor';
import Four from '../svg/symbols/extensions/Four';
import Five from '../svg/symbols/extensions/Five';
import Six from '../svg/symbols/extensions/Six';
import Nine from '../svg/symbols/extensions/Nine';
import Seven from '../svg/symbols/extensions/Seven';
import Eleven from '../svg/symbols/extensions/Eleven';
import Thirteen from '../svg/symbols/extensions/Thirteen';
import Dim from '../svg/symbols/extensions/Dim';
import HalfDim from '../svg/symbols/extensions/HalfDim';
import Add from '../svg/symbols/extensions/Add';
import Sus from '../svg/symbols/extensions/Sus';
import Maj from '../svg/symbols/extensions/Maj';

const Chord = ({
  size,
  indexOffset,
}: {
  size?: number; // rem
  indexOffset?: 0 | 1;
}) => {
  const { state, dispatch } = useContext(ChordsContext);
  const { chords, chordIndex } = state;

  const index = indexOffset ? chordIndex + indexOffset : chordIndex;
  const chord = chords[index];
  if (!chord) {
    return <></>;
  }

  // FONT SIZE = the size of this chord
  // this value dictates all other em size parameters
  if (size === undefined) size = 1.6; // rem

  const bases: { [key in Alphabet]: (height: number) => JSX.Element } = {
    A: (height) => <A height={height} />,
    B: (height) => <B height={height} />,
    C: (height) => <C height={height} />,
    D: (height) => <D height={height} />,
    E: (height) => <E height={height} />,
    F: (height) => <F height={height} />,
    G: (height) => <G height={height} />,
  };

  const extensions: {
    // [key in ExtensionText]: (height: number) => JSX.Element;
    [key: string]: (height: number) => JSX.Element;
  } = {
    b: (height) => <Flat height={height} />,
    '#': (height) => <Sharp height={height} />,
    '4': (height) => <Four height={height} />,
    '5': (height) => <Five height={height} />,
    '6': (height) => <Six height={height} />,
    '7': (height) => <Seven height={height} />,
    '9': (height) => <Nine height={height} />,
    '11': (height) => <Eleven height={height} />,
    '13': (height) => <Thirteen height={height} />,
    '69': (height) => (
      <div className={styles['chord__seven--sixnine']}>
        <Six height={height} />
        <Nine height={height} />
      </div>
    ),
    o: (height) => <Dim height={height} />,
    h: (height) => <HalfDim height={height} />,
    '+': (height) => <HalfDim height={height} />,
    add: (height) => <Add height={height} />,
    sus: (height) => <Sus height={height} />,
    maj: (height) => <Maj height={height} />,
  };

  const createJsxArray = (str: string) => {
    const jsxArray: {
      key: keyof ExtensionText;
      element: (height: number) => JSX.Element;
    }[] = [];

    while (str.length) {
      // check 69 first
      if (str.indexOf('69') === 0) {
        jsxArray.push({
          key: '69' as keyof ExtensionText,
          element: extensions['69'],
        });
        str = str.slice(2);
      } else {
        Object.keys(extensions).forEach((e) => {
          if (str.indexOf(e as string) === 0) {
            jsxArray.push({
              key: e as keyof ExtensionText,
              element: extensions[e as keyof typeof extensions],
            });
            str = str.slice(e.length);
          }
        });
      }
    }
    return jsxArray;
  };

  const jsxArrays: {
    key: keyof ExtensionText;
    element: (height: number) => JSX.Element;
  }[][] = [];
  chord.extension.segments.forEach((segment) =>
    jsxArrays.push(createJsxArray(segment))
  );

  const isMobile = matchMedia('(pointer:coarse)').matches;
  const nextChord = () => {
    if (isMobile) {
      if (chordIndex >= chords.length - 2) {
        dispatch({ type: 'APPEND_CHORD_LIST' });
      } else {
        dispatch({ type: 'INCREMENT_CHORD_INDEX' });
      }
    }
  };

  return (
    <div
      className={styles.chord}
      style={{ fontSize: size + 'rem' }}
      onClick={nextChord}
    >
      <div className={styles.chord__base}>{bases[chord.key.base](1)}</div>
      {chord.key.accidental && (
        <div className={styles.chord__accidental}>
          {chord.key.accidental === 'b' && <Flat height={1} />}
          {chord.key.accidental === '#' && <Sharp height={1} />}
        </div>
      )}
      {chord.extension.isMinor && (
        <div className={styles.chord__minor}>
          <Minor height={1} />
        </div>
      )}
      {jsxArrays.length >= 1 && (
        <div className={styles.chord__seven}>
          {jsxArrays[0].map((el) => {
            return cloneElement(el.element(0.55), { key: Math.random() });
          })}
        </div>
      )}
      {jsxArrays.length > 1 && (
        <div className={styles.chord__brackets}>
          {jsxArrays.length === 3 ? (
            <Bracket height={1.4} double />
          ) : (
            <Bracket height={0.7} />
          )}
          <div>
            {jsxArrays.slice(1).map((array) => (
              <div key={Math.random()}>
                {array.map((el) =>
                  cloneElement(el.element(0.55), { key: Math.random() })
                )}
              </div>
            ))}
          </div>
          {jsxArrays.length === 3 ? (
            <Bracket height={1.4} double flip />
          ) : (
            <Bracket height={0.7} flip />
          )}
        </div>
      )}
    </div>
  );
};

export default Chord;
