const LightDark = () => {
  const strokeWidth = 0.5;

  return (
    <div
      className='lightdark'
      // tabIndex={0}
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'>
        <path
          d='M11 21 A 10 10 0 0 1 11 1 A 10 10 0 0 1 11 21'
          fill='white'
          stroke='black'
          strokeWidth={strokeWidth}
        />
        <path
          d='M11 1 A 10 10 0 0 1 11 21 A 5 5 0 0 1 11 11 A 5 5 0 0 0 11 1'
          fill='black'
          stroke='black'
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
};

export default LightDark;
