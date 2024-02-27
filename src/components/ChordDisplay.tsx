import { FC, useContext } from 'react';
import { Context } from '../context/Context';
import Bracket from '../img/Bracket';

const ChordDisplay = () => {
  const ctx = useContext(Context);
  const [chordList] = ctx.chordListState;
  const [chordIndex] = ctx.chordIndexState;

  const chord = chordList[chordIndex];
  // console.log(chord);
  const flat: string = '♭';
  const sharp: string = '♯';

  // const replaceAccidentals = (string: string): FC => {
  //   let result: FC = <div></div>;
  //   // for (let i = 0; i < string.length; i++) {
  //   //   const char = string[i];
  //   //   if (char === 'b') {
  //   //     result += <span className='flat'>{flat}</span>;
  //   //   } else if (char === '#') {
  //   //     result += <span className='sharp'>{sharp}</span>;
  //   //   } else {
  //   //     result += char;
  //   //   }
  //   // }
  //   return result;
  // };

  // console.log(replaceAccidentals('Cb7b9'));

  return (
    <div className='section'>
      <div className='chord'>
        {chord && (
          <>
            <div className='chord__base'>{chord.base}</div>
            {/* {chord.base.split('').map((char) =>
              char === 'b' ? (
                <div className='chord__flat' key={char}>
                  {flat}
                </div>
              ) : char === '#' ? (
                <div className='chord__sharp' key={char}>
                  {sharp}
                </div>
              ) : (
                <div className='chord__base' key={char}>
                  {char}
                </div>
              )
            )} */}
            {chord.isMinor && <div className='chord__minor'>-</div>}
            {chord.dim && <div className='chord__dim'>{chord.dim}</div>}
            {chord.seventh && (
              <div className='chord__seventh'>{chord.seventh}</div>
            )}
            {chord.sixNine && <div className='chord__sixnine'>/</div>}
            {chord.top && (
              <div className='chord__brackets'>
                <Bracket width={chord.bottom ? 0.5 : 0.3} />
                <div
                  className={
                    'chord__inside-brackets' +
                    (chord.bottom ? ' chord__inside-brackets__small' : '')
                  }
                >
                  <div>{chord.top}</div>
                  {chord.bottom && <div>{chord.bottom}</div>}
                </div>
                <Bracket width={chord.bottom ? 0.5 : 0.3} flip />
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
