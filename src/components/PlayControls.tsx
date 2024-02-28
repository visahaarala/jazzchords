import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import { generateChord, generateChords } from '../data/harmonies';
import { useMetronome } from '../metronome/useMetronome';
import click from '../sounds/click.mp3';

const PlayControls = () => {
  const ctx = useContext(Context);
  const [chordList, setChordList] = ctx.chordListState;
  const [chordIndex, setChordIndex] = ctx.chordIndexState;
  const [beatsPerMinute] = ctx.beatsPerMinuteState;
  const [beatsPerChord] = ctx.beatsPerChordState;
  const [volumeIsOn] = ctx.volumeIsOnState;
  const [play, setPlay] = useState<boolean>(false);
  const [beat, setBeat] = useState(0);
  const [audio, setAudio] = useState<HTMLAudioElement>();

  // load click audio beforehand to avoid error
  useEffect(() => {
    const _audio = new Audio(click);
    _audio.load();
    _audio.addEventListener('canplaythrough', () => {
      setAudio(_audio);
    });
  }, []);

  const generatorProps = {
    extensionLevels: ctx.extensionLevelsState[0],
    accidentalLevels: ctx.accidentalLevelsState[0],
  };

  // reset chord list when chord settings are changed
  useEffect(() => {
    setChordList(generateChords({ ...generatorProps, numberOfChords: 2 }));
    setChordIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx.extensionLevelsState[0], ctx.accidentalLevelsState[0]]);

  const nextHandler = () => {
    if (chordIndex >= chordList.length - 2) {
      setChordList((prevList) => [
        ...prevList,
        generateChord({ ...generatorProps }),
      ]);
    }
    setChordIndex((prevIndex) => prevIndex + 1);
  };

  const previousHandler = () => {
    if (chordIndex > 0) setChordIndex((prevIndex) => prevIndex - 1);
    setBeat(0);
  };

  useMetronome(
    () => {
      if (play) {
        const playButton = document.getElementById('play')!;
        playButton.style.filter = 'brightness(2)';
        setTimeout(() => {
          playButton.style.filter = 'brightness(1)';
          if (beat !== 0 && beat % beatsPerChord === 0) {
            nextHandler();
            setBeat(1);
          } else {
            setBeat((prevBeat) => prevBeat + 1);
          }
          if (audio && play && volumeIsOn) audio.play();
        }, 50);
      }
    },
    play ? (60 / beatsPerMinute) * 1000 : undefined
  );

  return (
    <div className='section'>
      <div className='buttons'>
        <div>
          {/* <p id='test'>TEST</p> */}
          <button onClick={nextHandler} className='next'>
            Next
          </button>
          <div>
            <button onClick={previousHandler}>Previous</button>
            <div>
              <button
                onClick={() => {
                  setPlay(!play);
                }}
                id='play'
              >
                {!play ? 'Play' : 'Stop'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayControls;
