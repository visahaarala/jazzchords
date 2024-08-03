const Minor = ({ height }: { height?: number }) => {
  const xmin = 1;
  const ymin = -35;

  const svgWidth = 54.8;
  const svgHeight = 80;
  const strokeWidth = svgHeight / 12;

  const divWidth = height ? `${height * (svgWidth / svgHeight)}rem` : undefined;

  return (
    <svg
      style={{
        width: divWidth,
        // backgroundColor: 'orangered',
      }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`${xmin} ${ymin} ${svgWidth} ${svgHeight}`}
    >
      <path
        d='M4 5 L 4 76 M 4 20 A 12 15 0 0 1 28 20 L 28 75 M 28 20 A 12 15 0 0 1 52 20 L 52 70'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default Minor;
