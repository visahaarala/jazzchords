import { useContext } from 'react';
import { Context } from '../context/Context';
import Bracket from './Bracket';

const ChordDisplay = () => {
  const ctx = useContext(Context);
  const [chordList] = ctx.chordListState;
  const [chordIndex] = ctx.chordIndexState;

  const chord = chordList[chordIndex];
  const flat: string = '♭';
  const sharp: string = '♯';

  // FONT SIZE = the size of this chord
  // this value dictates all other parameters
  // use this value also in <Brackets size={size}>
  const size = 1.6; //rem

  return (
    <div className='section'>
      <div className='chord' style={{ fontSize: size + 'rem' }}>
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
                <Bracket size={size} double={chord.bracket[1] ? true : false} />
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
                <Bracket
                  size={size}
                  double={chord.bracket[1] ? true : false}
                  flip
                />
              </div>
            )}
            {chord.alt && <div className='chord__alt'>{chord.alt}</div>}
          </>
        )}
      </div>
    </div>
  );
};

export default ChordDisplay;
