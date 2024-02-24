import RangeSelect from './RangeSelect';
import { useContext } from 'react';
import { Context } from '../context/Context';
import { basesSorted, extensionsSorted } from '../data/harmonies';
import { AccidentalLevel, ExtensionLevel } from '../@types';

const ChordSettings = () => {
  const ctx = useContext(Context);

  return (
    <div className='section'>
      <h1>Chord settings</h1>
      <RangeSelect
        title='Accidentals'
        levelsState={ctx.accidentalLevelsState}
        options={Object.keys(basesSorted) as AccidentalLevel[]}
      />
      <RangeSelect<ExtensionLevel>
        title='Complexity'
        levelsState={ctx.extensionLevelsState}
        options={Object.keys(extensionsSorted) as ExtensionLevel[]}
      />
    </div>
  );
};

export default ChordSettings;
