const A = ({ height }: { height?: number }) => {
  const svgWidth = 70;
  const svgHeight = 80;

  const divWidth = height ? `${height * (svgWidth / svgHeight)}rem` : undefined;

  return (
    <svg
      style={{ width: divWidth }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
    >
      <path
        d='M5 80 L 35 0 L 65 80 M 24 50 H 50 '
        stroke='currentColor'
        strokeWidth={10}
        strokeLinecap='square'
        fill='none'
      />
    </svg>
  );
};

export default A;
