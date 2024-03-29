import React from 'react';
import styles from './Info.module.scss';
import SettingsIcon from '../components/icon-buttons/navigation/SettingsIcon';
import PlaybackIcon from '../components/icon-buttons/navigation/PlaybackIcon';
import PlayButtonIcon from '../components/icon-buttons/play/PlayButtonIcon';

const headerIconStyle: React.CSSProperties = {
  display: 'inline-block',
  width: '1.5rem',
  height: '1.5rem',
  padding: '0',
  marginRight: '.2rem',
  transform: 'translateY(.3rem)',
};

const iconStyle: React.CSSProperties = {
  display: 'inline-block',
  width: '1rem',
  height: '1rem',
  marginRight: '.1rem',
  marginLeft: '.1rem',
  transform: 'translateY(.15rem)',
};

const Info = () => (
  <>
    <h2>jazzchords</h2>
    <div className={styles.info}>
      <div>A tool for practicing random jazz chords.</div>
      <div>
        <SettingsIcon style={headerIconStyle} /> Set the range of key signatures
        under <span>accidentals</span>, the range of chord complexity under{' '}
        <span>difficulty</span>, and the settings for tempo, time signature & volume under{' '}
        <span>metronome</span>.
        Copy the settings URL to share it with others.
      </div>
      <div>
        <PlaybackIcon style={headerIconStyle} /> Randomly generate and go back
        and forth between chords using the{' '}
        <PlayButtonIcon type='next' style={iconStyle} /> &{' '}
        <PlayButtonIcon type='prev' style={iconStyle} /> buttons, or play{' '}
        <PlayButtonIcon type='play' style={iconStyle} /> through random chords
        with metronome.
      </div>
      <div>
        More info at{' '}
        <a href='https://github.com/visahaarala/jazzchords/blob/main/README.md'>
          GitHub
        </a>
        .
      </div>
    </div>
  </>
);

export default Info;
