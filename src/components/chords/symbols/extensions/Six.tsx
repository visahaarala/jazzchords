const Six = ({ height }: { height?: number }) => {
  const xmin = 2.5;
  const ymin = 3.3;
  const svgWidth = 42.6;
  const svgHeight = 62.3;
  const strokeWidth = svgHeight / 10;

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
        d='M40 15 C 35 5 15 5 10 15 C 5 25 5 45 10 55 C 15 65 35 65 40 55 C 42 51 42 44 40 40 C 35 30 15 30 10 40 C 8 45 8.3 48 8.6 50'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        strokeLinecap='square'
        fill='none'
      />
    </svg>
  );
};

export default Six;
