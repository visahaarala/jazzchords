const C = ({ height }: { height?: number }) => {
  const xmin = 3;
  const ymin = 2.2;

  const svgWidth = 66;
  const svgHeight = 75.7;
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
        d='M 65 25 C 55 0 20 0 10 25 C 6 35 6 45 10 55 C 20 80 55 80 65 55'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
      />
    </svg>
  );
};

export default C;
