import styles from './Settings.module.scss';

import RangeSelect from '../components/settings/RangeSelect';
import { useContext } from 'react';
import { Context } from '../context/Context';
import { basesOrganized, extensionsOrganized } from '../data/harmonies';
import { AccidentalLevel, ExtensionLevel } from '../@types';
import TempoSelect from '../components/settings/MetronomeSelect';
import TimeSignatureSelect from '../components/settings/TimeSignatureSelect';
import Volume from '../components/settings/Volume';
import MetronomeSelect from '../components/settings/MetronomeSelect';

const Settings = () => {
  const ctx = useContext(Context);

  return (
    <>
      <h2>settings</h2>
      <div className={styles.settings}>
        <h3>metronome</h3>
        <MetronomeSelect />
        <h3>difficulty</h3>
        <RangeSelect<ExtensionLevel>
          range={ctx.extensionRange}
          setRange={ctx.setExtensionRange}
          options={Object.keys(extensionsOrganized) as ExtensionLevel[]}
        />
        <h3>accidentals</h3>
        <RangeSelect<AccidentalLevel>
          range={ctx.accidentalRange}
          setRange={ctx.setAccidentalRange}
          options={Object.keys(basesOrganized) as AccidentalLevel[]}
        />
      </div>
    </>
  );
};

export default Settings;
