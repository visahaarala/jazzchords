import styles from './Settings.module.scss';

import RangeSelect from '../components/settings/RangeSelect';
import { useContext } from 'react';
import { Context } from '../context/Context';
import { basesOrganized, extensionsOrganized } from '../data/harmonies';
import { AccidentalLevel, ExtensionLevel } from '../@types';
import MetronomeSelect from '../components/settings/MetronomeSelect';
import CopyIcon from '../components/icon-buttons/settings/CopyIcon';
import Reset from '../components/settings/Reset';

const Settings = () => {
  const ctx = useContext(Context);

  return (
    <>
      <h2>settings</h2>
      <div className={styles.copy}>
        <span>Copy settings URL to clipboard</span>
        <CopyIcon />
      </div>
      <div className={styles.reset}>
        <Reset />
      </div>
      <div className={styles.settings}>
        <h3>metronome</h3>
        <MetronomeSelect />
        <h3>difficulty</h3>
        <RangeSelect
          min={ctx.extensionRange[0]}
          max={ctx.extensionRange[1]}
          minKey='dmin'
          maxKey='dmax'
          options={Object.keys(extensionsOrganized)}
        />
        <h3>accidentals</h3>
        <RangeSelect
          min={ctx.accidentalRange[0]}
          max={ctx.accidentalRange[1]}
          minKey='amin'
          maxKey='amax'
          options={Object.keys(basesOrganized) as AccidentalLevel[]}
        />
      </div>
    </>
  );
};

export default Settings;
