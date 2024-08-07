const Plus = ({ height }: { height?: number }) => {
  const xmin = 0;
  const ymin = 0;

  const svgWidth = 40;
  const svgHeight = 40;
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
        d='M0 20H40M20 0V40'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default Plus;
