const Flat = ({ height }: { height?: number }) => {
  const xmin = 2.5;
  const ymin = 2.6;

  const svgWidth = 37.4;
  const svgHeight = 75.4;

  const divWidth = height ? `${height * (svgWidth / svgHeight)}em` : undefined;

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
        // d='M5 5 V73.7 C 50 50 40 14 7 43 M5 5 V73.7 C 46 50 36 20 7 43'
        d='M5 5 V73.7 C 50 50 40 14 7 43 M5 5 V73.7 C 49 50 37 18 7 43'
        stroke='currentColor'
        strokeWidth={5}
        fill='none'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default Flat;
