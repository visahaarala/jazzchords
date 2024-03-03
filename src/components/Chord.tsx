import { useContext } from 'react';
import { Context } from '../context/Context';
import Bracket from './Bracket';

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
  const ctx = useContext(Context);
  const [chordList] = ctx.chordListState;
  const [chordIndex] = ctx.chordIndexState;

  const index = indexOffset ? chordIndex + indexOffset : chordIndex;
  const chord = chordList[index];
  const flat: string = '♭';
  const sharp: string = '♯';

  // FONT SIZE = the size of this chord
  // this value dictates all other em size parameters
  if (size === undefined) size = 1.6; // rem

  if (contrast === undefined) contrast = 100;

  if (marginTop === undefined) marginTop = size * 0.5;
  else marginTop = size * 0.5 + marginTop;

  if (marginBottom === undefined) marginBottom = 0;

  return (
    <div
      className='chord'
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
              <div className='chord__flat' key={char}>
                {flat}
              </div>
            ) : char === sharp ? (
              <div className='chord__sharp' key={char}>
                {sharp}
              </div>
            ) : (
              <div className='chord__base' key={char}>
                {char}
              </div>
            )
          )}
          {chord.isMinor && <div className='chord__minor'>m</div>}
          {chord.dim && <div className='chord__dim'>{chord.dim}</div>}
          {chord.seventh && (
            <div className='chord__seventh'>{chord.seventh}</div>
          )}
          {chord.sixNine && <div className='chord__sixnine'>/</div>}
          {chord.bracket[0] && (
            <div
              className={
                'chord__brackets' +
                (chord.bracket[1] ? ' chord__brackets--double' : '')
              }
            >
              <Bracket double={chord.bracket[1] ? true : false} />
              <div
                className={
                  'chord__inside-brackets' +
                  (chord.bracket[1] ? ' chord__inside-brackets__small' : '')
                }
              >
                {chord.bracket.map((part) => (
                  <div key={Math.random()}>
                    {part?.split('').map((char) =>
                      char === flat ? (
                        <span className='flat' key={flat}>
                          {flat}
                        </span>
                      ) : char === sharp ? (
                        <span className='sharp' key={sharp}>
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
          {chord.alt && <div className='chord__alt'>{chord.alt}</div>}
        </>
      )}
    </div>
  );
};

export default Chord;
