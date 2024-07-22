const F = ({ height }: { height: number }) => {
  const xmin = 0;
  const ymin = 0;

  const svgWidth = 60;
  const svgHeight = 80;

  const divWidth = `${height * (svgWidth / svgHeight)}rem`;

  return (
    <svg
      style={{ width: divWidth }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`${xmin} ${ymin} ${svgWidth} ${svgHeight}`}
    >
      <path
        d='M55 5 H5 V 75 M 10 40 H 47'
        stroke='currentColor'
        strokeWidth={10}
        fill='none'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default F;
