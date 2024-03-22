import RangeSelect from '../components/settings/RangeSelect';
import { useContext } from 'react';
import { Context } from '../context/Context';
import { basesOrganized, extensionsOrganized } from '../data/harmonies';
import { AccidentalLevel, ExtensionLevel } from '../@types';
import TempoSelect from '../components/settings/TempoSelect';

const Settings = () => {
  const ctx = useContext(Context);

  return (
    <>
      <h3>♭♭♭ / ♯♯♯</h3>
      <RangeSelect
        // title='Accidentals'
        levelsState={ctx.accidentalLevelState}
        options={Object.keys(basesOrganized) as AccidentalLevel[]}
      />
      <h3>C7 / C9b13</h3>
      <RangeSelect<ExtensionLevel>
        // title='Difficulty'
        levelsState={ctx.extensionLevelState}
        options={Object.keys(extensionsOrganized) as ExtensionLevel[]}
      />
      <h3>Tempo & metronome</h3>
      <TempoSelect />
    </>
  );
};

export default Settings;
