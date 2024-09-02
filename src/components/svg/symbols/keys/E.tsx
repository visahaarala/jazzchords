const E = ({ height }: { height?: number }) => {
  const xmin = 0;
  const ymin = 0;

  const svgWidth = 60;
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
        d='M52 4 H4 V 76 H 55 M 10 39 H 48'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default E;
