const Dim = ({ height }: { height?: number }) => {
  const xmin = 2.5;
  const ymin = 2.5;

  const svgWidth = 45.5;
  const svgHeight = 65;
  const strokeWidth = svgHeight / 10;

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
      <ellipse
        cx='25'
        cy='28'
        rx='19'
        ry='22'
        fill='none'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default Dim;
