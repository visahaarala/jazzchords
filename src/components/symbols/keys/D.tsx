const D = ({ height }: { height?: number }) => {
  const xmin = 0;
  const ymin = 0;

  const svgWidth = 70.4;
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
      viewBox={`${xmin} ${ymin} ${svgWidth} ${svgHeight}`}
    >
      <path
        d='M4 4 H 30 A 36 36 0 1 1 30 76 H 4 z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
      />
    </svg>
  );
};

export default D;
