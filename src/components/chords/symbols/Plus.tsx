const Plus = ({ height }: { height?: number }) => {
  const xmin = 0;
  const ymin = 0;

  const svgWidth = 80;
  const svgHeight = 80;

  const divWidth = height ? `${height * (svgWidth / svgHeight)}rem` : undefined;

  return (
    <svg
      style={{ width: divWidth }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`${xmin} ${ymin} ${svgWidth} ${svgHeight}`}
    >
      <path
        d='M0 40H80M40 0V80'
        stroke='currentColor'
        strokeWidth={10}
        fill='none'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default Plus;
