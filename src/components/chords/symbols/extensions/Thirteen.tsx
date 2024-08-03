const Thirteen = ({ height }: { height?: number }) => {
  const xmin = 3;
  const ymin = 0;

  const svgWidth = 82;
  const svgHeight = 68;

  const divWidth = height ? `${height * (svgWidth / svgHeight)}rem` : undefined;

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
        strokeWidth={10}
        strokeLinejoin='bevel'
        fill='none'
      />
    </svg>
  );
};

export default Thirteen;
