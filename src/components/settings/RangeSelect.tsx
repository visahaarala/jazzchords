import styles from './Range.module.scss';
import { ChangeEvent } from 'react';

const RangeSelect = <T,>({
  title,
  levelsState,
  options,
}: {
  title: string;
  levelsState: [[T, T], React.Dispatch<React.SetStateAction<[T, T]>>];
  options: T[];
}) => {
  const [[min, max], setLevels] = levelsState;

  const minIndex = options.indexOf(min);
  const maxIndex = options.indexOf(max);

  const minHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const newMinIndex = Number(e.target.value);
    const newMaxIndex = newMinIndex > maxIndex ? newMinIndex : maxIndex;
    const newMinValue = options[newMinIndex];
    const newMaxValue = options[newMaxIndex];
    setLevels([newMinValue, newMaxValue]);
  };

  const maxHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const newMaxIndex = Number(e.target.value);
    const newMinIndex = newMaxIndex < minIndex ? newMaxIndex : minIndex;
    const newMinValue = options[newMinIndex];
    const newMaxValue = options[newMaxIndex];
    setLevels([newMinValue, newMaxValue]);

  };

  return (
    <div className={styles.range}>
      <h3>{title}</h3>
      <div className={styles.range__selector}>
        <select id={title + '-min'} value={minIndex} onChange={minHandler}>
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
        <select id={title + '-max'} value={maxIndex} onChange={maxHandler}>
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
