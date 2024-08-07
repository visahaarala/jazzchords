const Nine = ({ height }: { height?: number }) => {
  const xmin = 2.8;
  const ymin = 3.8;
  const svgWidth = 41.6;
  const svgHeight = 61.6;
  const strokeWidth = svgHeight / 10;

  const divWidth = height ? `${height * (svgWidth / svgHeight)}em` : undefined;

  const nineCurve = (x: number, y: number) => {
    x = x + 47.5;
    y = y + 69.5;
    return (
      `M${x - 40} ${y - 15}` + //
      `C ${x - 35} ${y - 5} ${x - 15} ${y - 5} ${x - 10} ${y - 15}` + //
      `C ${x - 5} ${y - 25} ${x - 5} ${y - 45} ${x - 10} ${y - 55}` + //
      `C ${x - 15} ${y - 65} ${x - 35} ${y - 65} ${x - 40} ${y - 55}` + //
      `C ${x - 42} ${y - 51} ${x - 42} ${y - 44} ${x - 40} ${y - 40}` + //
      `C ${x - 35} ${y - 30} ${x - 15} ${y - 30} ${x - 10} ${y - 40}` + //
      `C ${x - 8} ${y - 45} ${x - 8.3} ${y - 48} ${x - 8.6} ${y - 50}`
    );
  };

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
        d={nineCurve(0, 0)}
        stroke='currentColor'
        strokeWidth={strokeWidth}
        strokeLinecap='square'
        fill='none'
      />
    </svg>
  );
};

export default Nine;
