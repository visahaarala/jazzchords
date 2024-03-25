import styles from './Range.module.scss';
import { ChangeEvent, useContext } from 'react';
import { bpcOptions, bpmOptions } from '../../data/tempo';
import Volume from '../icons/settings/VolumeIcon';
import { Context } from '../../context/Context';
import useAppendSearchParams from '../../hooks/useAppendSearchParams';

const MetronomeSelect = () => {
  const ctx = useContext(Context);
  const appendSearchParams = useAppendSearchParams();
  const bpc = ctx.beatsPerChord;
  const bpm = ctx.beatsPerMinute;

  console.log('bpm at metronome settings', bpm);

  const bpcHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    appendSearchParams('bpc', e.target.value);
  };

  const bpmHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    appendSearchParams('bpm', e.target.value);
  };

  return (
    <div className={styles.range}>
      <div className={styles.range__selector}>
        <select id='bpc' value={bpc} onChange={bpcHandler}>
          {bpcOptions.map((bpc) => (
            <option value={bpc} key={bpc}>
              {bpc} {bpc === '1' ? 'beat' : 'beats'} / chord
            </option>
          ))}
        </select>
        <Volume />
        <select id='bpm' defaultValue={bpm} onChange={bpmHandler}>
          {bpmOptions.map((bpm) => (
            <option value={bpm} key={bpm}>
              {bpm} bpm
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MetronomeSelect;
