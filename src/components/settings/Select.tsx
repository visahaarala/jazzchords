const Select = <T,>({
  value,
  onChange,
  options,
  id,
}: {
  value: T;
  onChange: (value: T) => {};
  options: T[];
  id: string;
}) => {
  <select
    id={id}
    value={value as string}
    onChange={(e) => onChange(e.target.value as T)}
  >
    {options.map((option) => (
      <option value={option as string} key={option as string}>
        {option as string}
      </option>
    ))}
  </select>;
};

export default Select;
