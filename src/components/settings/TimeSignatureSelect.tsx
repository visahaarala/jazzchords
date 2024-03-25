import { ChangeEvent, useContext } from 'react';
import styles from './Range.module.scss';
import { Context } from '../../context/Context';
import { bpcOptions } from '../../data/tempo';

const TimeSignatureSelect = () => {
  const ctx = useContext(Context);
  const bpc = ctx.beatsPerChord;
  const setBpc = ctx.setBeatsPerChord;

  const bpcHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === '∞') setBpc(value);
    else setBpc(Number(e.target.value));
  };

  return (
    <div className={styles.range}>
      <div className={styles.range__selector}>
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
}

export default TimeSignatureSelect;