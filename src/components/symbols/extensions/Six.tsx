const Six = ({ height }: { height?: number }) => {
  const xmin = 3;
  const ymin = 4.2;
  const svgWidth = 41.8;
  const svgHeight = 61.5;
  const strokeWidth = svgHeight / 10;

  const divWidth = height ? `${height * (svgWidth / svgHeight)}em` : undefined;

  const sixCurve = (x: number, y: number) =>
    `M${x + 40} ${y + 15}` + //
    `C ${x + 35} ${y + 5} ${x + 15} ${y + 5} ${x + 10} ${y + 15}` + //
    `C ${x + 5} ${y + 25} ${x + 5} ${y + 45} ${x + 10} ${y + 55}` + //
    `C ${x + 15} ${y + 65} ${x + 35} ${y + 65} ${x + 40} ${y + 55}` + //
    `C ${x + 42} ${y + 51} ${x + 42} ${y + 44} ${x + 40} ${y + 40}` + //
    `C ${x + 35} ${y + 30} ${x + 15} ${y + 30} ${x + 10} ${y + 40}` + //
    `C ${x + 8} ${y + 45} ${x + 8.3} ${y + 48} ${x + 8.6} ${y + 50}`;

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
        d={sixCurve(0, 0)}
        stroke='currentColor'
        strokeWidth={strokeWidth}
        strokeLinecap='square'
        fill='none'
      />
    </svg>
  );
};

export default Six;
