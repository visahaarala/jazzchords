const G = ({ height }: { height?: number }) => {
  const xmin = 1.8;
  const ymin = 2;

  const svgWidth = 67.5;
  const svgHeight = 76.6;
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
        d='M64.2 23 C 60 0 15 0 8 25 C 5 35 5 45 8 55 C 15 80 50 78 65 65 V 45 H 40'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default G;
