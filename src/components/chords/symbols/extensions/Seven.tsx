const Seven = ({ height }: { height?: number }) => {
  const xmin = -1;
  const ymin = -1;

  const svgWidth = 52;
  const svgHeight = 70;
  const strokeWidth = svgHeight / 10;


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
        d='M5 5 L 50 5 C 35 20 20 40 15 70'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        strokeLinecap='square'
        fill='none'
      />
    </svg>
  );
};

export default Seven;
