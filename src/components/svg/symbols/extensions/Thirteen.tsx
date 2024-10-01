const Thirteen = ({
  height,
  strokeWidth,
}: {
  height?: number;
  strokeWidth?: number;
}) => {
  const xmin = 4;
  const ymin = 1.4;

  const svgWidth = 79.7;
  const svgHeight = 65.3;
  const svgStrokeWidth = strokeWidth ? strokeWidth : svgHeight / 10;

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
        d='M 27 70 L 27 0 L 7 25 M 50 19 A 14 14 0 1 1 65 33 A 15 15 0 1 1 50 48 M 65 33 L 61 33'
        stroke='currentColor'
        strokeWidth={svgStrokeWidth}
        strokeLinejoin='bevel'
        fill='none'
      />
    </svg>
  );
};

export default Thirteen;
