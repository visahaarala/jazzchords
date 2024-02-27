const Bracket = ({ width, flip }: { width: number; flip?: boolean }) => {
  const strokeWidth = 0.6 / width;

  let style = {
    width: width + 'rem',
    transform: 'none',
    marginRight: '.1rem',
    marginLeft: '0',
  };
  if (flip) {
    style.transform = 'scaleX(-1)';
    style.marginRight = '0';
    style.marginLeft = '.1rem';
  }

  return (
    <div style={style} className='bracket'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 20'>
        <path
          d='M4 1 A 20 20 0 0 0 4 19'
          fill='none'
          stroke='currentColor'
          strokeWidth={strokeWidth}
          strokeLinecap='round'
        />
      </svg>
    </div>
  );
};

export default Bracket;