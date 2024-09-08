import styles from './Select.module.scss';
import { ProgramState, ReducerActionType } from '../../@types';
import { useContext } from 'react';
import { ChordsContext } from '../../context/ChordsContext';

const Select = <T,>({
  dispatchActionType,
  payloadKey,
  options,
  description,
  optionToString,
  stringToOption,
}: {
  dispatchActionType: ReducerActionType;
  payloadKey: keyof ProgramState;
  options: T[];
  description?: string;
  optionToString?: (option: T) => string;
  stringToOption?: (optionString: string) => T;
}) => {
  const { state, dispatch } = useContext(ChordsContext);

  const value = state[payloadKey];

  const changeHandler = (value: string) => {
    dispatch({
      type: dispatchActionType,
      payload: {
        [payloadKey]: stringToOption ? stringToOption(value) : (value as T),
      },
    });
  };

  return (
    <select
      id={payloadKey}
      value={optionToString ? optionToString(value as T) : (value as string)}
      onChange={(e) => changeHandler(e.target.value)}
      className={`button ${styles.select}`}
    >
      {options.map((option) => {
        const optionString = optionToString
          ? optionToString(option)
          : (option as string);

        return (
          <option value={optionString} key={optionString}>
            {optionString} {description}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
