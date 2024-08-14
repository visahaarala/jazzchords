import styles from './Chord.module.scss';
import { cloneElement, useContext } from 'react';
import { ChordsContext } from '../../context/ChordsContext';
import Bracket from './symbols/extensions/Bracket';
import A from './symbols/keys/A';
import B from './symbols/keys/B';
import C from './symbols/keys/C';
import D from './symbols/keys/D';
import E from './symbols/keys/E';
import F from './symbols/keys/F';
import G from './symbols/keys/G';
import Flat from './symbols/extensions/Flat';
import { Key, Extension } from '../../@types';
import Sharp from './symbols/extensions/Sharp';
import Minor from './symbols/keys/Minor';
import Four from './symbols/extensions/Four';
import Five from './symbols/extensions/Five';
import Six from './symbols/extensions/Six';
import Nine from './symbols/extensions/Nine';
import Seven from './symbols/extensions/Seven';
import Eleven from './symbols/extensions/Eleven';
import Thirteen from './symbols/extensions/Thirteen';
import Dim from './symbols/extensions/Dim';
import HalfDim from './symbols/extensions/HalfDim';
import Add from './symbols/extensions/Add';
import Sus from './symbols/extensions/Sus';
import Maj from './symbols/extensions/Maj';

const Chord = ({
  size,
  indexOffset,
  contrast,
}: {
  size?: number; // rem
  indexOffset?: 0 | 1;
  contrast?: number; // percentage
}) => {
  const { state } = useContext(ChordsContext);
  const { chordList, chordIndex } = state;

  const index = indexOffset ? chordIndex + indexOffset : chordIndex;
  const chord = chordList[index];
  if (!chord) {
    return <></>;
  }

  // FONT SIZE = the size of this chord
  // this value dictates all other em size parameters
  if (size === undefined) size = 1.6; // rem

  if (contrast === undefined) contrast = 100;

  const bases: { [key in Key]: (height: number) => JSX.Element } = {
    A: (height) => <A height={height} />,
    B: (height) => <B height={height} />,
    C: (height) => <C height={height} />,
    D: (height) => <D height={height} />,
    E: (height) => <E height={height} />,
    F: (height) => <F height={height} />,
    G: (height) => <G height={height} />,
  };

  const extensions: { [key in Extension]: (height: number) => JSX.Element } = {
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
      key: keyof Extension;
      element: (height: number) => JSX.Element;
    }[] = [];

    while (str.length) {
      // check 69 first
      if (str.indexOf('69') === 0) {
        jsxArray.push({
          key: '69' as keyof Extension,
          element: extensions['69'],
        });
        str = str.slice(2);
      } else {
        Object.keys(extensions).forEach((e) => {
          if (str.indexOf(e as string) === 0) {
            jsxArray.push({
              key: e as keyof Extension,
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
    key: keyof Extension;
    element: (height: number) => JSX.Element;
  }[][] = [];
  chord.extension.forEach((ex) => jsxArrays.push(createJsxArray(ex)));

  return (
    <div
      className={styles.chord}
      style={{ fontSize: size + 'rem', filter: `contrast(${contrast}%)` }}
    >
      <div className={styles.chord__base}>{bases[chord.base](1)}</div>
      {chord.accidental && (
        <div className={styles.chord__accidental}>
          {chord.accidental === 'flat' && <Flat height={1} />}
          {chord.accidental === 'sharp' && <Sharp height={1} />}
        </div>
      )}
      {chord.isMinor && (
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
