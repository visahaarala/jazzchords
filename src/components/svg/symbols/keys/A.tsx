const A = ({ height }: { height?: number }) => {
  const svgWidth = 70;
  const svgHeight = 80;
  const strokeWidth = svgHeight / 10;

  const divWidth = height ? `${height * (svgWidth / svgHeight)}em` : undefined;

  return (
    <svg
      style={{
        width: divWidth,
        // backgroundColor: 'orangered',
      }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
    >
      <path
        d='M4.4 80 L 35 0 L 65.6 80 M 22 50 H 50 '
        stroke='currentColor'
        strokeWidth={strokeWidth}
        strokeLinecap='square'
        fill='none'
      />
    </svg>
  );
};

export default A;
