import styles from './Chord.module.scss';
import { ReactNode, useContext } from 'react';
import { ReducerContext } from '../../context/ReducerContext';
import Bracket from './Bracket';
import A from './symbols/A';
import B from './symbols/B';
import C from './symbols/C';
import D from './symbols/D';
import E from './symbols/E';
import F from './symbols/F';
import G from './symbols/G';
import Flat from './symbols/Flat';
import { Base } from '../../@types';
import Sharp from './symbols/Sharp';
import Minor from './symbols/Minor';

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

  if (!chord) {
    return <p>no chord</p>;
  }

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
