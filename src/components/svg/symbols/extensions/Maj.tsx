const Maj = ({ height }: { height?: number }) => {
  const xmin = 10;
  const ymin = -50;

  const svgWidth = 199;

  const heightMultiplier = 1.22;

  const svgHeight = 121 * heightMultiplier;
  const strokeWidth = svgHeight / 10 / heightMultiplier;

  const divWidth = height
    ? `${height * heightMultiplier * (svgWidth / svgHeight)}em`
    : undefined;

  return (
    <svg
      style={{
        width: divWidth,
        // backgroundColor: 'orangered',
      }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`${xmin} ${ymin} ${svgWidth} ${svgHeight}`}
    >
      {/* <path d='M 10 -2 H 210' stroke='currentColor' />
      <path d='M 10 71 H 210' stroke='currentColor' /> */}
      <path
        d='M15 5 L 15 64 M 15 25 A 20 20 0 0 1 55 25 L 55 64 M 55 25 A 20 20 0 0 1 95 25 L 95 64'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='square'
      />
      <path
        d='M 120 20 C 125 5 140 5 150 5 C 155 5 170 3 170 30 L 170 40 C 170 65 150 64 140 64 C 125 64 120 55 120 50 C 120 35 140 35 150 33 C 160 31 165 30 170 28 M 170 30 L 170 70'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='butt'
      />
      <path
        d={'M 202 -30 L 202 ' + (-30 + strokeWidth)}
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='butt'
      />
      <path
        d='M 202 -1 L 202 75 C 202 85 195 90 185 90'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='butt'
      />
      {/* <circle cx={202} cy={-20} r={8} fill='currentcolor' /> */}
    </svg>
  );
};

export default Maj;
