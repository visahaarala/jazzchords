import { ChangeEvent, useEffect, useState } from 'react';

const RangeSelect = <T,>({
  title,
  levelsState,
  options,
  initialMax,
}: {
  title: string;
  levelsState: [T[], React.Dispatch<React.SetStateAction<T[]>>];
  options: T[];
  initialMax?: number;
}) => {
  const setLevels = levelsState[1];
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(initialMax ? initialMax : options.length - 1);

  useEffect(() => {
    const newLevels: T[] = [];
    for (let i = min; i <= max; i++) {
      newLevels.push(options[i]);
    }
    setLevels(newLevels);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [min, max]);

  const minHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const newMin = parseInt(e.target.value);
    setMin(newMin);
    if (newMin > max) setMax(newMin);
  };

  const maxHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const newMax = parseInt(e.target.value);
    setMax(newMax);
    if (newMax < min) setMin(newMax);
  };

  return (
    <div className='range'>
      <h3>{title}</h3>
      <div className='range__selectors'>
        <select id={title + '-min'} value={min} onChange={minHandler}>
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
        <select id={title + '-max'} value={max} onChange={maxHandler}>
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
