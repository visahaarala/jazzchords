const Sharp = ({ height }: { height?: number }) => {
  const xmin = 0;
  const ymin = 0;

  const svgWidth = 40;
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
        d='M11 10 V80 M29 0 V70'
        stroke='currentColor'
        strokeWidth={strokeWidth * 0.6}
        fill='none'
        strokeLinecap='square'
      />
      <path
        d='M0 35 L40 15 M0 65 L40 45'
        stroke='currentColor'
        strokeWidth={strokeWidth * 0.9}
        fill='currentColor'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default Sharp;
