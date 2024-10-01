import styles from './Info.module.scss';
import MetronomeIcon from '../components/svg/icons/MetronomeIcon';
import PlayIcon from '../components/svg/icons/PlayIcon';
import LockIcon from '../components/svg/icons/LockIcon';
import NotesIcon from '../components/svg/icons/NotesIcon';
import { useState } from 'react';

const isMobile = matchMedia('(pointer:coarse)').matches;

const isStandaone = matchMedia('(display-mode: standalone)').matches;

const Info = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className={styles.info}>
      {isMobile && !isStandaone && (
        <div className={styles.pwa}>
          <div className={styles.pwa__header}>
            <div className={styles.pwa__header__description}>
              This{' '}
              {/* <a href='https://en.wikipedia.org/wiki/Progressive_web_app'>
              </a>{' '} */}
              progressive web app can be installed on home screen for easier
              use.
              <br />
            </div>
            <div className={styles.pwa__header__toggle}>
              <input
                type='checkbox'
                checked={showDropDown}
                onChange={setShowDropDown.bind(null, !showDropDown)}
              />
              <span />
            </div>
          </div>
          {/* {showDropDown && ( */}
          <div
            className={`${styles.pwa__dropdown} ${
              showDropDown && styles.pwa__dropdown__visible
            }`}
          >
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis quos pariatur cupiditate error cumque molestiae sunt.
              Voluptas quaerat obcaecati pariatur saepe, eos quidem. Architecto,
              officiis molestiae. Alias voluptas vero voluptatibus corrupti nam
              commodi illo vel id, dignissimos ad quasi, sit voluptatem
              nesciunt, dolor enim ullam perferendis blanditiis. Natus quasi est
              animi totam quos. Reiciendis officiis nulla ut perspiciatis
              voluptas dolore numquam autem quos commodi, sunt odit minus
              incidunt, excepturi ipsa aperiam quaerat consequatur! In fugit
              corporis ex ipsum beatae repellat magnam eum quibusdam suscipit
              sit consequatur eius dignissimos est labore eaque, sed quidem at
              nihil voluptates illo omnis? Doloremque, explicabo?
            </div>
          </div>
          {/* )} */}
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
          <PlayIcon />
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
