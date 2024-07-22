const D = ({ height }: { height: number }) => {
  const xmin = 0;
  const ymin = 0;

  const svgWidth = 70;
  const svgHeight = 80;

  const divWidth = `${height * (svgWidth / svgHeight)}rem`;

  return (
    <svg
      style={{ width: divWidth }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`${xmin} ${ymin} ${svgWidth} ${svgHeight}`}
    >
      <path
        d='M5 5 H 30 A 35 35 0 1 1 30 75 H 5 z'
        stroke='currentColor'
        strokeWidth={10}
        fill='none'
      />
    </svg>
  );
};

export default D;
