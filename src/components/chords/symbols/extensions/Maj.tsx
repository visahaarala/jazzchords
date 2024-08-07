const Maj = ({ height }: { height?: number }) => {
  const xmin = 10;
  const ymin = -50;

  const svgWidth = 201;
  const svgHeight = 119.5;
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
      {/* <path d='M -1 -2 L 400 -2' stroke='currentColor' /> */}
      <path
        d='M15 5 L 15 75 M 15 25 A 20 20 0 0 1 55 25 L 55 75 M 55 25 A 20 20 0 0 1 95 25 L 95 75'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='square'
      />
      <path
        d='M 120 20 C 125 5 140 5 150 5 C 155 5 170 3 170 30 L 170 40 C 170 65 150 64 140 64 C 125 64 120 55 120 50 C 120 35 140 35 150 33 C 160 31 165 30 170 28 M 170 30 L 170 40 C 170 50 170 60 175 75'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='butt'
      />
      <path
        d='M 202 0 L 202 70'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='butt'
      />
      <circle cx={202} cy={-20} r={8} fill='currentcolor' />
    </svg>
  );
};

export default Maj;
