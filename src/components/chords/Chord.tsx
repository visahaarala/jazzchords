import styles from './Chord.module.scss';
import { cloneElement, ReactNode, useContext } from 'react';
import { ReducerContext } from '../../context/ReducerContext';
import Bracket from './Bracket';
import A from './symbols/keys/A';
import B from './symbols/keys/B';
import C from './symbols/keys/C';
import D from './symbols/keys/D';
import E from './symbols/keys/E';
import F from './symbols/keys/F';
import G from './symbols/keys/G';
import Flat from './symbols/extensions/Flat';
import { Base, Extension } from '../../@types';
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
  const { state } = useContext(ReducerContext);
  const { chordList, chordIndex } = state;

  const index = indexOffset ? chordIndex + indexOffset : chordIndex;
  const chord = chordList[index];
  if (!chord) {
    return <></>;
  }


  console.log('extension:', chord.extension);

  // FONT SIZE = the size of this chord
  // this value dictates all other em size parameters
  if (size === undefined) size = 1.6; // rem

  if (contrast === undefined) contrast = 100;

  const bases: { [key in Base]: JSX.Element } = {
    A: <A />,
    B: <B />,
    C: <C />,
    D: <D />,
    E: <E />,
    F: <F />,
    G: <G />,
  };

  const extensions: { [key in Extension]: JSX.Element } = {
    b: <Flat />,
    '#': <Sharp />,
    '4': <Four />,
    '5': <Five />,
    '6': <Six />,
    '7': <Seven />,
    '9': <Nine />,
    '11': <Eleven />,
    '13': <Thirteen />,
    o: <Dim />,
    h: <HalfDim />,
    '+': <HalfDim />,
    add: <Add />,
    sus: <Sus />,
    maj: <Maj />,
  };

  console.log(Object.keys(extensions));

  const createJsxArray = (str: string): JSX.Element[] => {
    const jsxArray: JSX.Element[] = [];

    while (str.length) {
      // check 69 first
      Object.keys(extensions).forEach((e) => {
        if (str.indexOf(e as string) === 0) {
          jsxArray.push(extensions[e as keyof typeof extensions]);
          str = str.slice(e.length);
        }
      });
    }
    return jsxArray;
  };

  const jsxArrays: JSX.Element[][] = [];
  chord.extension.forEach((ex) => jsxArrays.push(createJsxArray(ex)));
  // jsxArrays.push(createJsxArray('omaj9'));

  return (
    <div
      className={styles.chord}
      style={{ fontSize: size + 'rem', filter: `contrast(${contrast}%)` }}
    >
      <div className={styles.chord__base}>{bases[chord.base]}</div>
      {chord.accidental && (
        <div className={styles.chord__accidental}>
          {chord.accidental === 'flat' && <Flat />}
          {chord.accidental === 'sharp' && <Sharp />}
        </div>
      )}
      {chord.isMinor && (
        <div className={styles.chord__minor}>
          <Minor />
        </div>
      )}
      <div className={styles.chord__extension}>
        {jsxArrays.map((array) =>
          // cloneElement in order to add a key prop
          array.map((jsx) => cloneElement(jsx, { key: Math.random() }))
        )}
      </div>
    </div>
  );
  // <div
  //   className={styles.chord}
  //   style={{
  //     fontSize: size + 'rem',
  //     marginTop: marginTop + 'rem',
  //     marginBottom: marginBottom + 'rem',
  //     filter: `contrast(${contrast}%)`,
  //   }}
  // >
  //   {chord && (
  //     <>
  //       {chord.base.split('').map((char) =>
  //         char === flat ? (
  //           <div className={styles.chord__flat} key={char}>
  //             {flat}
  //             {/* <Flat height={2.8} /> */}
  //           </div>
  //         ) : char === sharp ? (
  //           <div className={styles.chord__sharp} key={char}>
  //             {sharp}
  //           </div>
  //         ) : (
  //           <div className={styles.chord__base} key={char}>
  //             {/* {char} */}
  //             {chars['g']}
  //           </div>
  //         )
  //       )}
  //       {chord.isMinor && <div className={styles.chord__minor}>m</div>}
  //       {chord.dim && <div className={styles.chord__dim}>{chord.dim}</div>}
  //       {chord.seventh && (
  //         <div className={styles.chord__seventh}>{chord.seventh}</div>
  //       )}
  //       {chord.sixNine && <div className={styles.chord__sixnine}>/</div>}
  //       {chord.bracket[0] && (
  //         <div
  //           className={`${styles.chord__brackets} ${
  //             chord.bracket[1] ? styles['chord__brackets--double'] : ''
  //           } `}
  //         >
  //           <Bracket double={chord.bracket[1] ? true : false} />
  //           <div
  //             className={`${styles['chord__inside-brackets']} ${
  //               chord.bracket[1]
  //                 ? styles['chord__inside-brackets__small']
  //                 : ''
  //             }`}
  //           >
  //             {chord.bracket.map((part) => (
  //               <div key={Math.random()}>
  //                 {part?.split('').map((char) =>
  //                   char === flat ? (
  //                     <span className={styles.flat} key={flat}>
  //                       {flat}
  //                     </span>
  //                   ) : char === sharp ? (
  //                     <span className={styles.sharp} key={sharp}>
  //                       {sharp}
  //                     </span>
  //                   ) : (
  //                     char
  //                   )
  //                 )}
  //               </div>
  //             ))}
  //           </div>
  //           <Bracket double={chord.bracket[1] ? true : false} flip />
  //         </div>
  //       )}
  //       {chord.alt && <div className={styles.chord__alt}>{chord.alt}</div>}
  //     </>
  //   )}
  // </div>
};

export default Chord;
