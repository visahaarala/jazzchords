import styles from './Chord.module.scss';
import { useContext } from 'react';
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

const Chord = ({
  size,
  indexOffset,
  marginTop,
  marginBottom,
  contrast,
}: {
  size?: number; // rem
  indexOffset?: 0 | 1;
  marginTop?: number; // rem
  marginBottom?: number; // rem
  contrast?: number; // percentage
}) => {
  const { state } = useContext(ReducerContext);
  const { chordList, chordIndex } = state;

  const index = indexOffset ? chordIndex + indexOffset : chordIndex;
  const chord = chordList[index];
  const flat: string = '♭';
  const sharp: string = '♯';

  // FONT SIZE = the size of this chord
  // this value dictates all other em size parameters
  if (size === undefined) size = 1.6; // rem

  if (contrast === undefined) contrast = 100;
  if (marginTop === undefined) marginTop = 0;
  if (marginBottom === undefined) marginBottom = 0;

  const chars = {
    a: <A height={3} />,
    b: <B height={3} />,
    c: <C height={3} />,
    d: <D height={3} />,
    e: <E height={3} />,
    f: <F height={3} />,
    g: <G height={3} />,
  };

  return (
    <div
      className={styles.chord}
      style={{
        fontSize: size + 'rem',
        marginTop: marginTop + 'rem',
        marginBottom: marginBottom + 'rem',
        filter: `contrast(${contrast}%)`,
      }}
    >
      {chord && (
        <>
          {chord.base.split('').map((char) =>
            char === flat ? (
              <div className={styles.chord__flat} key={char}>
                {flat}
                {/* <Flat height={2.8} /> */}
              </div>
            ) : char === sharp ? (
              <div className={styles.chord__sharp} key={char}>
                {sharp}
              </div>
            ) : (
              <div className={styles.chord__base} key={char}>
                {/* {char} */}
                {chars['g']}
              </div>
            )
          )}
          {chord.isMinor && <div className={styles.chord__minor}>m</div>}
          {chord.dim && <div className={styles.chord__dim}>{chord.dim}</div>}
          {chord.seventh && (
            <div className={styles.chord__seventh}>{chord.seventh}</div>
          )}
          {chord.sixNine && <div className={styles.chord__sixnine}>/</div>}
          {chord.bracket[0] && (
            <div
              className={`${styles.chord__brackets} ${
                chord.bracket[1] ? styles['chord__brackets--double'] : ''
              } `}
            >
              <Bracket double={chord.bracket[1] ? true : false} />
              <div
                className={`${styles['chord__inside-brackets']} ${
                  chord.bracket[1]
                    ? styles['chord__inside-brackets__small']
                    : ''
                }`}
              >
                {chord.bracket.map((part) => (
                  <div key={Math.random()}>
                    {part?.split('').map((char) =>
                      char === flat ? (
                        <span className={styles.flat} key={flat}>
                          {flat}
                        </span>
                      ) : char === sharp ? (
                        <span className={styles.sharp} key={sharp}>
                          {sharp}
                        </span>
                      ) : (
                        char
                      )
                    )}
                  </div>
                ))}
              </div>
              <Bracket double={chord.bracket[1] ? true : false} flip />
            </div>
          )}
          {chord.alt && <div className={styles.chord__alt}>{chord.alt}</div>}
        </>
      )}
    </div>
  );
};

export default Chord;
