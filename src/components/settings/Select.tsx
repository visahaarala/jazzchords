import styles from './Select.module.scss';
import { ProgramState, ReducerActionType } from '../../@types';
import { useContext } from 'react';
import { ReducerContext } from '../../context/ReducerContext';

const Select = <T,>({
  dispatchActionType,
  payloadKey,
  options,
  description,
  descriptionSingle,
}: {
  dispatchActionType: ReducerActionType;
  payloadKey: keyof ProgramState;
  options: T[];
  description?: string;
  descriptionSingle?: string;
}) => {
  const { state, dispatch } = useContext(ReducerContext);

  const value = state[payloadKey];

  const changeHandler = (value: T) => {
    dispatch({ type: dispatchActionType, payload: { [payloadKey]: value } });
  };

  return (
    <select
      id={payloadKey}
      value={value as string}
      onChange={(e) => changeHandler(e.target.value as T)}
      className={`button ${styles.select}`}
    >
      {options.map((option) => (
        <option value={option as string} key={option as string}>
          {option as string}{' '}
          {descriptionSingle && (option as string) === '1'
            ? descriptionSingle
            : description}
        </option>
      ))}
    </select>
  );
};

export default Select;
