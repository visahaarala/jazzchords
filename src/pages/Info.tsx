import React from 'react';
import styles from './Info.module.scss';
import MetronomeIcon from '../components/svg/icons/MetronomeIcon';
import PlayIcon from '../components/svg/icons/PlayIcon';
import Lock from '../components/svg/icons/LockIcon';
import NotesIcon from '../components/svg/icons/NotesIcon';

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

const isMobile = matchMedia('(pointer:coarse)').matches;

const isStandaone = matchMedia('(display-mode: standalone)').matches;

const Info = () => (
  <div className={styles.info}>
    {isMobile && !isStandaone && (
      <div>
        This{' '}
        <a href='https://en.wikipedia.org/wiki/Progressive_web_app'>
          progressive web app
        </a>{' '}
        can be installed for easier access and use.
      </div>
    )}

    <div>
      <div style={headerIconStyle}>
        <NotesIcon />
      </div>
      Learn about notes in different chords.
    </div>

    <div>
      <div>
        <div style={headerIconStyle}>
          <PlayIcon />
        </div>
        Practice randomly generated chords. <br />
        Use locks
        <div style={textIconStyle}>
          <Lock isLocked />
        </div>
        to practice a particular key and/or extension.
      </div>
    </div>

    <div>
      <div style={headerIconStyle}>
        <MetronomeIcon />
      </div>
      A metronome.
    </div>

    {isMobile && (
      <div>
        Turn off silent mode to hear the click. <br />
        Prevent screen timeout / sleep / auto-lock from device settings if
        necessary.
      </div>
    )}

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
