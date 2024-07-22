const G = ({ height }: { height: number }) => {
  const xmin = .7;
  const ymin = 1;

  const svgWidth = 69.3;
  const svgHeight = 78.4;

  const divWidth = `${height * (svgWidth / svgHeight)}rem`;

  return (
    <svg
      style={{ width: divWidth }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`${xmin} ${ymin} ${svgWidth} ${svgHeight}`}
    >
      <path
        d='M64.2 23 C 60 0 15 0 8 25 C 5 35 5 45 8 55 C 15 80 50 78 65 65 V 45 H 40'
        stroke='currentColor'
        strokeWidth={10}
        fill='none'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default G;
