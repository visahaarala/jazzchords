const B = ({ height }: { height: number }) => {
  const svgWidth = 63.2;
  const svgHeight = 80;

  const divWidth = `${height * (svgWidth / svgHeight)}rem`;

  return (
    <svg
      style={{ width: divWidth }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
    >
      <path
        d='M 5 75 V 5 H 37 A 17 17 0 1 1 37 39 H 10 H 40 A 18 18 0 1 1 40 75 z'
        stroke='currentColor'
        strokeWidth={10}
        strokeLinecap='square'
        fill='none'
      />
    </svg>
  );
};

export default B;
