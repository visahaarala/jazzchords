const B = ({ height }: { height?: number }) => {
  const xmin = 1;
  const ymin = 1;

  const svgWidth = 62.1;
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
        d='M 5 77 V 5 H 37 A 17 17 0 1 1 37 39 H 8 H 40 A 19 19 0 1 1 40 77 z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        strokeLinecap='square'
        fill='none'
      />
    </svg>
  );
};

export default B;
