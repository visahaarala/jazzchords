import RangeSelect from './RangeSelect';
import { useContext } from 'react';
import { Context } from '../context/Context';
import { basesOrganized, extensionsOrganized } from '../data/harmonies';
import { AccidentalLevel, ExtensionLevel } from '../@types';
import TempoSelect from './TempoSelect';

const Settings = () => {
  const ctx = useContext(Context);

  return (
    <div className='section'>
      <RangeSelect
        title='Accidentals'
        levelsState={ctx.accidentalLevelsState}
        options={Object.keys(basesOrganized) as AccidentalLevel[]}
      />
      <RangeSelect<ExtensionLevel>
        title='Complexity'
        levelsState={ctx.extensionLevelsState}
        options={Object.keys(extensionsOrganized) as ExtensionLevel[]}
      />
      <TempoSelect />
    </div>
  );
};

export default Settings;
