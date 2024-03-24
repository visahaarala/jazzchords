import React from 'react';
import styles from './Info.module.scss';
import SettingsIcon from '../components/navigation/SettingsIcon';
import PlaybackIcon from '../components/navigation/PlaybackIcon';
import PlayButtonIcon from '../components/play-controls/PlayButtonIcon';

const headerIconStyle: React.CSSProperties = {
  display: 'inline-block',
  width: '1.5rem',
  height: '1.5rem',
  marginRight: '.25rem',
  transform: 'translateY(.25rem)',
};

const iconStyle: React.CSSProperties = {
  display: 'inline-block',
  width: '1rem',
  height: '1rem',
  marginRight: '.2rem',
  marginLeft: '.2rem',
  transform: 'translateY(.15rem)',
};

const Info = () => (
  <>
    <h2>jazzchords</h2>
    <div className={styles.info}>
      <p>A tool for practicing random jazz chords.</p>
      <p>
        <SettingsIcon style={headerIconStyle} /> Set the range of key signatures
        below <span>accidentals</span>, the chord complexity level under{' '}
        <span>difficulty</span>, and tempo & time signature under{' '}
        <span>metronome</span>.
      </p>
      <p>
        <PlaybackIcon style={headerIconStyle} /> Randomly generate and go back
        and forth between chords using the{' '}
        <PlayButtonIcon type='next' style={iconStyle} /> &{' '}
        <PlayButtonIcon type='prev' style={iconStyle} /> buttons, or play{' '}
        <PlayButtonIcon type='play' style={iconStyle} /> through random chords
        with metronome.
      </p>
      <p>
        More info at{' '}
        <a href='https://github.com/visahaarala/jazzchords/blob/main/README.md'>
          GitHub
        </a>
        .
      </p>
    </div>
  </>
);

export default Info;
