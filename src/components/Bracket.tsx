const Bracket = ({
  double,
  size,
  flip,
}: {
  double?: boolean;
  size: number;
  flip?: boolean;
}) => {
  const width = double ? size * 0.4 : size * 0.2;

  const strokeWidth = 0.5 / width;

  const translateY = double ? 'translateY(.13em)' : '';

  let style = {
    width: width + 'em',
    transform: translateY,
    marginRight: '.1rem',
    marginLeft: '0',
  };
  if (flip) {
    style.transform = 'scaleX(-1)' + translateY;
    style.marginRight = '0';
    style.marginLeft = '.1rem';
  }

  return (
    <div style={style}>
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
