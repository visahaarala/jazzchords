const Bracket = ({
  height,
  double,
  flip,
}: {
  height: number;
  double?: boolean;
  flip?: boolean;
}) => {
  const xmin = double ? 0.7 : -0.7;
  const ymin = double ? 0.9 : -0.9;
  const svgWidth = double ? 13.5 : 16.8;
  const svgHeight = double ? 78.1 : 81.8;
  const strokeWidth = double ? svgHeight / 30 : svgHeight / 15;

  const divWidth = height ? `${height * (svgWidth / svgHeight)}em` : undefined;

  return (
    <svg
      style={{
        width: divWidth,
        transform: flip ? 'scaleX(-1)' : '',
        // backgroundColor: 'orangered',
      }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`${xmin} ${ymin} ${svgWidth} ${svgHeight}`}
    >
      <path
        d='M 12 3 C -1 20 -1 60 12 77'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default Bracket;
