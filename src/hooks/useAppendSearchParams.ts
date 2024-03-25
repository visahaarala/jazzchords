import { useSearchParams } from 'react-router-dom';

const useAppendSearchParams = () => {
  const setSearchParams = useSearchParams()[1];

  return (newKey: string, newValue: string) => {
    const search = window.location.search;
    const urlParams = new URLSearchParams(search);

    const keys: string[] = [];
    for (const key of urlParams.keys()) keys.push(key);

    const values: string[] = [];
    for (const value of urlParams.values()) values.push(value);

    const object: { [key: string]: string } = {};

    for (let i = 0; i < keys.length; i++) {
      object[keys[i]] = values[i];
    }
    object[newKey] = newValue;

    setSearchParams(object);
  };
};

export default useAppendSearchParams;
