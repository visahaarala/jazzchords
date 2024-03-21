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
      <RangeSelect
        title='Accidentals'
        levelsState={ctx.accidentalLevelState}
        options={Object.keys(basesOrganized) as AccidentalLevel[]}
        initialMax={4}
      />
      <RangeSelect<ExtensionLevel>
        title='Difficulty'
        levelsState={ctx.extensionLevelState}
        options={Object.keys(extensionsOrganized) as ExtensionLevel[]}
        initialMax={1}
      />
      <TempoSelect />
    </>
  );
};

export default Settings;
