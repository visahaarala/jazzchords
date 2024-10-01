import styles from './Info.module.scss';
import MetronomeIcon from '../components/svg/icons/MetronomeIcon';
import LockIcon from '../components/svg/icons/LockIcon';
import NotesIcon from '../components/svg/icons/NotesIcon';
import ShareIcon from '../components/svg/icons/ShareIcon';
import C7 from '../components/svg/icons/C7';

const isMobile = matchMedia('(pointer:coarse)').matches;

const isStandaone = matchMedia('(display-mode: standalone)').matches;

const Info = () => {
  const isIphone = navigator.userAgent.includes('iPhone');

  return (
    <div className={styles.info}>
      {isMobile && !isStandaone && (
        <div>
          This progressive web app can be installed for easier use.
          {isIphone && (
            <>
              {' '}
              Just tap
              <span className={styles.icon__share}>
                <ShareIcon />
              </span>
              and then "Add to Home Screen".
            </>
          )}
        </div>
      )}

      <div>
        <span className={styles.icon__header}>
          <NotesIcon />
        </span>
        Learn about notes in different chords.
      </div>

      <div>
        <span className={styles.icon__header}>
          <C7 />
        </span>
        Practice randomly generated chords. <br />
        Use locks
        <span className={styles.icon__text}>
          <LockIcon isLocked />
        </span>
        to practice a particular key and/or extension.
      </div>

      <div>
        <span className={styles.icon__header}>
          <MetronomeIcon />
        </span>
        A metronome.
      </div>

      {isMobile && (
        <div>
          Turn off silent mode to hear the click. <br />
          Prevent screen timeout / sleep / auto-lock from device settings if
          necessary.
        </div>
      )}

      {!isMobile && <div>Use tab, space and arrows to navigate.</div>}

      <div>
        More info at{' '}
        <a href='https://github.com/visahaarala/jazzchords/blob/main/README.md'>
          GitHub
        </a>
        .
      </div>
    </div>
  );
};

export default Info;
