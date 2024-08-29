import React from 'react';
import styles from './Info.module.scss';
import SettingsIcon from '../components/icons/SettingsIcon';
import MetronomeIcon from '../components/icons/MetronomeIcon';
import PlayIcon from '../components/icons/PlayIcon';
import NextIcon from '../components/icons/NextIcon';
import PreviousIcon from '../components/icons/PreviousIcon';
import Lock from '../components/icons/Lock';
import { flashTempoLimit } from './Metronome';

const headerIconStyle: React.CSSProperties = {
  display: 'inline-block',
  width: '1.5rem',
  height: '1.5rem',
  padding: '0',
  marginRight: '.6rem',
  transform: 'translateY(.3rem)',
};

const textIconStyle: React.CSSProperties = {
  display: 'inline-block',
  width: '1rem',
  height: '1rem',
  marginLeft: '.4rem',
  marginRight: '.4rem',
  transform: 'translateY(.15rem)',
};

const Info = () => (
  <div className={styles.info}>
    <div>
      <div style={headerIconStyle}>
        <MetronomeIcon />
      </div>
      A metronome. Flash not available in tempos over {flashTempoLimit}bpm.
    </div>

    <div>
      <div style={headerIconStyle}>
        <SettingsIcon />
      </div>
      Settings for the jazzchords player.
    </div>

    <div>
      <div>
        <div style={headerIconStyle}>
          <PlayIcon />
        </div>
        Jazzchords player &mdash; randomly generate and go back and forth
        between chords using the
        <div style={textIconStyle}>
          <NextIcon />
        </div>
        and
        <div style={textIconStyle}>
          <PreviousIcon />
        </div>
        buttons, or play
        <div style={textIconStyle}>
          <PlayIcon />
        </div>
        through random chords.
      </div>
      <div>
        Use lock
        <div style={textIconStyle}>
          <Lock isLocked />
        </div>
        to practice a particular chord key / extension.
      </div>
    </div>

    <div>
      More info at{' '}
      <a href='https://github.com/visahaarala/jazzchords/blob/main/README.md'>
        GitHub
      </a>
      .
    </div>
  </div>
);

export default Info;
