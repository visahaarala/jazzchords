const BassClefPath = () => {
  type CurvePoint = {
    // curve point
    x: number;
    y: number;
    // relative shooting direction
    dx: number;
    dy: number;
    // backwards shoot factor
    bf: number;
  };

  const curvePoints: CurvePoint[][] = [
    [
      { x: 22, y: -3.5, dx: -3, dy: 0, bf: 1 },
      { x: 17.5, y: -9, dx: 0, dy: -5, bf: 0.6 },
      { x: 28, y: -19.8, dx: 6, dy: 0, bf: 1.3 },
      { x: 37, y: -7, dx: -1, dy: 6, bf: 1.4 },
      { x: 20, y: 17, dx: -10, dy: 8, bf: 0.8 },
    ],
    [
      { x: 22, y: -5.5, dx: -3, dy: 0, bf: 1 },
      { x: 19, y: -9, dx: 0, dy: -5, bf: 0.6 },
      { x: 27.5, y: -19.7, dx: 4, dy: 0, bf: 1.8 },
      { x: 34, y: -7, dx: -0.5, dy: 6, bf: 1.4 },
      { x: 20, y: 17, dx: -10, dy: 8, bf: 0.8 },
    ],
    [
      { x: 18.5, y: -9, dx: 0, dy: -5, bf: 0.6 },
      { x: 28, y: -19.8, dx: 6, dy: 0, bf: 1.3 },
      { x: 36.2, y: -7, dx: -1, dy: 6, bf: 1.4 },
      { x: 20, y: 17, dx: -10, dy: 8, bf: 0.8 },
    ],
    [
      { x: 28, y: -19.8, dx: 5, dy: 0, bf: 1.3 },
      { x: 35.3, y: -7, dx: -1, dy: 6, bf: 1.4 },
      { x: 20, y: 17, dx: -10, dy: 8, bf: 0.8 },
    ],
    [
      { x: 28, y: -19.8, dx: 5, dy: 0, bf: 1.3 },
      { x: 34.7, y: -7, dx: -0.5, dy: 6, bf: 1.4 },
      { x: 20, y: 17, dx: -10, dy: 8, bf: 0.8 },
    ],
  ];

  const curve = (curvePoints: CurvePoint[]): string => {
    let curve = '';

    let prevDx = 0;
    let prevDy = 0;
    let x = 0;
    let y = 0;
    for (const p of curvePoints) {
      if (curve.length === 0) {
        curve = `M ${p.x} ${p.y}`;
      } else {
        curve += `C ${x + prevDx} ${y + prevDy} ${p.x - p.dx * p.bf} ${
          p.y - p.dy * p.bf
        } ${p.x} ${p.y}`;
      }
      x = p.x;
      y = p.y;
      prevDx = p.dx;
      prevDy = p.dy;
    }
    return curve;
  };

  return (
    <>
      <circle cx={22} cy={-7.5} r={4.5} fill='currentColor' />
      <path
        d={curvePoints.map((cp) => curve(cp)).join(' ')}
        fill='none'
        stroke='currentColor'
        strokeWidth={1}
        strokeLinecap='butt'
      />
      <circle cx={41.5} cy={-14} r={1.8} fill='currentColor' />
      <circle cx={41.5} cy={-6} r={1.8} fill='currentColor' />
    </>
  );
};

export default BassClefPath;
