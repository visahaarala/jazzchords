const Add = ({ height }: { height?: number }) => {
  const xmin = 114.5;
  const ymin = -50;

  const svgWidth = 210;
  const svgHeight = 119.5;
  const strokeWidth = svgHeight / 10;

  const divWidth = height ? `${height * (svgWidth / svgHeight)}em` : undefined;

  const dOne = 193;
  const dTwo = dOne + 72;

  const dPath = (x: number) =>
    `M ${x + 50} -30 L ${x + 50} 50` + //
    `C ${x + 50} 55 ${x + 50} 65 ${x + 52} 70` + //
    `M ${x + 50} 35 C ${x + 50} 15 ${x + 40} 5 ${x + 25} 5` + //
    `C ${x + 10} 5 ${x} 15 ${x} 35` + //
    `C ${x} 50 ${x + 1} 64 ${x + 25} 64` + //
    `C ${x + 35} 64 ${x + 50} 60 ${x + 50} 35`;

  return (
    <svg
      style={{
        width: divWidth,
        // backgroundColor: 'orangered',
      }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`${xmin} ${ymin} ${svgWidth} ${svgHeight}`}
    >
      {/* <path d='M -1 -2 L 400 -2' stroke='currentColor' /> */}
      <path
        d='M 120 20 C 125 5 140 5 150 5 C 155 5 170 3 170 30 L 170 40 C 170 65 150 64 140 64 C 125 64 120 55 120 50 C 120 35 140 35 150 33 C 160 31 165 30 170 28 M 170 30 L 170 40 C 170 50 170 60 175 75'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='butt'
      />
      <path
        d={dPath(dOne)}
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='square'
      />
      <path
        d={dPath(dTwo)}
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default Add;
