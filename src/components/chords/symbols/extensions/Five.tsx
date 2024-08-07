const Five = ({ height }: { height?: number }) => {
  const xmin = 2.5;
  const ymin = 1.5;

  const svgWidth = 47;
  const svgHeight = 72.5;
  const strokeWidth = svgHeight / 10;

  const divWidth = height ? `${height * (svgWidth / svgHeight)}em` : undefined;

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
        d='M 42 5 L 13 5 L 8 40 A 20 20 0 1 1 8 60 M 8 37 L 13.7 0'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        strokeLinecap='square'
        strokeLinejoin='bevel'
        fill='none'
      />
    </svg>
  );
};

export default Five;
