const Add = ({ height }: { height?: number }) => {
  const xmin = 114.5;
  const ymin = -30;

  const svgWidth = 210;
  const svgHeight = 99.5;
  const strokeWidth = svgHeight / 10;

  const divWidth = height ? `${height * (svgWidth / svgHeight)}rem` : undefined;

  const dOne = 193;
  const dTwo = dOne + 72;

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
        d={`M ${dOne + 50} -40 L ${dOne + 50} 50 C ${dOne + 50} 55 ${
          dOne + 50
        } 65 ${dOne + 52} 70 M ${dOne + 50} 35 C ${dOne + 50} 15 ${
          dOne + 40
        } 5 ${dOne + 25} 5 C ${
          dOne + 10
        } 5 ${dOne} 15 ${dOne} 35 C ${dOne} 50 ${dOne + 1} 64 ${
          dOne + 25
        } 64 C ${dOne + 35} 64 ${dOne + 50} 60 ${dOne + 50} 35`}
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='square'
      />
      <path
        d={`M ${dTwo + 50} -40 L ${dTwo + 50} 50 C ${dTwo + 50} 55 ${
          dTwo + 50
        } 65 ${dTwo + 52} 70 M ${dTwo + 50} 35 C ${dTwo + 50} 15 ${
          dTwo + 40
        } 5 ${dTwo + 25} 5 C ${
          dTwo + 10
        } 5 ${dTwo} 15 ${dTwo} 35 C ${dTwo} 50 ${dTwo + 1} 64 ${
          dTwo + 25
        } 64 C ${dTwo + 35} 64 ${dTwo + 50} 60 ${dTwo + 50} 35`}
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='square'
      />
    </svg>
  );
};

export default Add;
