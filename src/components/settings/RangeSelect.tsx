import styles from './Range.module.scss';
import { ChangeEvent } from 'react';

const RangeSelect = <T,>({
  range,
  setRange,
  options,
}: {
  range: [T, T];
  setRange: (range: [T, T]) => void;
  options: T[];
}) => {
  const [min, max] = range;

  const minIndex = options.indexOf(min);
  const maxIndex = options.indexOf(max);

  const minHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const newMinIndex = Number(e.target.value);
    const newMaxIndex = newMinIndex > maxIndex ? newMinIndex : maxIndex;
    const newMinValue = options[newMinIndex];
    const newMaxValue = options[newMaxIndex];
    setRange([newMinValue, newMaxValue]);
  };

  const maxHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const newMaxIndex = Number(e.target.value);
    const newMinIndex = newMaxIndex < minIndex ? newMaxIndex : minIndex;
    const newMinValue = options[newMinIndex];
    const newMaxValue = options[newMaxIndex];
    setRange([newMinValue, newMaxValue]);
  };

  return (
    <div className={styles.range}>
      <div className={styles.range__selector}>
        <select id={Math.random() + ''} value={minIndex} onChange={minHandler}>
          {Object.keys(options).map((key) => {
            const value = options[parseInt(key)];
            return (
              <option value={key} key={key}>
                {value as string}
              </option>
            );
          })}
        </select>
        <span>&mdash;</span>
        <select id={Math.random() + ''} value={maxIndex} onChange={maxHandler}>
          {Object.keys(options).map((key) => {
            const value = options[parseInt(key)];
            return (
              <option value={key} key={key}>
                {value as string}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default RangeSelect;
