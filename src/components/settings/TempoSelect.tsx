import styles from './Range.module.scss';
import { ChangeEvent, useContext } from 'react';
import { bpcOptions, bpmOptions } from '../../data/tempo';
import Volume from './Volume';
import { Context } from '../../context/Context';

const TempoSelect = () => {
  const ctx = useContext(Context);
  const [bpc, setBpc] = ctx.beatsPerChordState;
  const [bpm, setBpm] = ctx.beatsPerMinuteState;

  const bpcHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === '∞') setBpc(value);
    else setBpc(Number(e.target.value));
  };

  const bpmHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setBpm(Number(e.target.value));
  };

  return (
    <div className={styles.range}>
      <div className={styles.range__selector}>
        <select id='bpm' defaultValue={bpm} onChange={bpmHandler}>
          {bpmOptions.map((bpm) => (
            <option value={bpm} key={bpm}>
              {bpm} bpm
            </option>
          ))}
        </select>
        <Volume />
        <select id='bpc' value={bpc} onChange={bpcHandler}>
          {bpcOptions.map((bpc) => (
            <option value={bpc} key={bpc}>
              {bpc} {bpc === 1 ? 'beat' : 'beats'} / chord
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TempoSelect;
