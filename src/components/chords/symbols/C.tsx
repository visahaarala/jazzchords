const C = ({ height }: { height: number }) => {
  const xmin = 2;
  const ymin = 1.2;

  const svgWidth = 67.7;
  const svgHeight = 77.55;

  const divWidth = `${height * ((svgWidth) / (svgHeight))}rem`;

  return (
    <svg
      style={{ width: divWidth }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`${xmin} ${ymin} ${svgWidth} ${svgHeight}`}
    >
      <path
        // d='M 65 25 A 30 35 0 1 0 65 55'
        d='M 65 25 C 55 0 20 0 10 25 C 6 35 6 45 10 55 C 20 80 55 80 65 55'
        // d='M 65 25 Q 40 -10 15 25 T 15 55 T 65 55'
        stroke='currentColor'
        strokeWidth={10}
        fill='none'
      />
    </svg>
  );
};

export default C;
