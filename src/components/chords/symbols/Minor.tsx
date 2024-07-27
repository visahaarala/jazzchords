const Minor = ({ height }: { height?: number }) => {
  const xmin = -1;
  const ymin = 0;

  const svgWidth = 92;
  const svgHeight = 80;

  const divWidth = height ? `${height * (svgWidth / svgHeight)}rem` : undefined;

  return (
    <svg
      style={{ width: divWidth }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`${xmin} ${ymin} ${svgWidth} ${svgHeight}`}
    >
      <path
        d='M5 5 L 5 75 M 5 25 A 20 20 0 0 1 45 25 L 45 75 M 45 25 A 20 20 0 0 1 85 25 L 85 75'
        stroke='currentColor'
        strokeWidth={12}
        fill='none'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default Minor;
