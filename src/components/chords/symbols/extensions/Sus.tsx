const Sus = ({ height }: { height?: number }) => {
  const xmin = 0;
  const ymin = -50;

  const svgWidth = 212;
  const svgHeight = 121;
  const strokeWidth = svgHeight / 10;

  const divWidth = height ? `${height * (svgWidth / svgHeight)}em` : undefined;

  const sCurve = (x: number) => {
    return (
      `M ${x + 55} 15` + // (linebreak)
      `C ${x + 55} 5 ${x + 40} 5 ${x + 30} 5` + //
      `C ${x + 20} 5 ${x} 5 ${x} 20` + //
      `C ${x} 30 ${x} 30 ${x + 30} 35` + //
      `C ${x + 55} 40 ${x + 55} 40 ${x + 55} 55` + //
      `C ${x + 55} 65 ${x + 40} 65 ${x + 30} 65` + //
      `C ${x + 20} 65 ${x} 65 ${x} 55`
    );
  };

  const uCurve = (x: number) => {
    return (
      `M ${x} 5 V 45` + //
      `C ${x} 55 ${x + 5} 65 ${x + 20} 65` + //
      `C ${x + 28} 65 ${x + 40} 60 ${x + 44} 40` + //
      `M ${x + 45} 5 V 50` + //
      `C ${x + 45} 54 ${x + 46} 67 ${x + 47} 70`
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
      {/* <path d='M -1 -2 L 400 -2' stroke='currentColor' /> */}
      <path
        d={sCurve(6)}
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='square'
      />
      <path
        d={uCurve(83)}
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='square'
      />
      <path
        d={sCurve(151)}
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default Sus;
