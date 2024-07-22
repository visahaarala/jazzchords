const Flat = ({ height }: { height: number }) => {
  const xmin = 1.5;
  const ymin = 1.5;

  const svgWidth = 37.4;
  const svgHeight = 77.1;

  const divWidth = `${height * (svgWidth / svgHeight)}rem`;

  return (
    <svg
      style={{ width: divWidth }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`${xmin} ${ymin} ${svgWidth} ${svgHeight}`}
    >
      <path
        d='M5 5 V73 C 50 50 40 14 7 37'
        stroke='currentColor'
        strokeWidth={7}
        fill='none'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default Flat;
