const Eleven = ({ height }: { height?: number }) => {
  const xmin = 0;
  const ymin = 0;

  const svgWidth = 69;
  const svgHeight = 70;
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
        d='M 65 70 L 65 0 L 45 25 M 25 70 L 25 0 L 5 25'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        strokeLinecap='square'
        fill='none'
      />
    </svg>
  );
};

export default Eleven;
