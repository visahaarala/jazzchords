const GClefCurve = () => {
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

  const gCurvePointsOne: CurvePoint[] = [
    { x: 30, y: 13, dx: -10, dy: -5, bf: 1 },
    { x: 33, y: 0.5, dx: 4, dy: 0, bf: 1 },
    { x: 40, y: 10, dx: 0, dy: 5, bf: 1 },
    { x: 30, y: 20, dx: -5, dy: 0, bf: 1 },
    { x: 21, y: 8, dx: 0, dy: -6, bf: 1 },
    { x: 31, y: -13, dx: 1.2, dy: -2, bf: 5 },
    { x: 34, y: -24, dx: 0, dy: -3, bf: 1 },
    { x: 31, y: -35, dx: -2, dy: 0, bf: 1 },
    { x: 29, y: -20, dx: 1, dy: 7, bf: 1 },
    { x: 33, y: 10, dx: 1, dy: 7, bf: 1 },
    { x: 33, y: 30, dx: -2, dy: 3, bf: 1 },
    { x: 28, y: 32, dx: -0.5, dy: 0, bf: 1 },
    { x: 24, y: 27, dx: 0, dy: -3, bf: 1 },
  ];

  const gCurvePointsTwo: CurvePoint[] = [
    { x: 30, y: 13, dx: -10, dy: -5, bf: 1 },
    { x: 33, y: -0.5, dx: 6, dy: 0, bf: 1 },
    { x: 41, y: 10, dx: 0, dy: 5, bf: 1 },
    { x: 30, y: 20, dx: -5, dy: 0, bf: 1 },
    { x: 20, y: 8, dx: 0, dy: -6, bf: 1 },
    { x: 29.6, y: -13, dx: 1.2, dy: -2, bf: 5 },
    { x: 33.5, y: -24, dx: 0, dy: -5, bf: 0.8 },
    { x: 31, y: -35, dx: -2, dy: 0, bf: 1 },
    { x: 29, y: -20, dx: 1, dy: 7, bf: 1 },
    { x: 33, y: 10, dx: 1, dy: 7, bf: 1 },
    { x: 33, y: 30, dx: -2, dy: 3, bf: 1 },
    { x: 28, y: 31.5, dx: 0, dy: 0, bf: 1 },
    { x: 25, y: 27, dx: 0, dy: -3, bf: 1 },
  ];

  const gClefCurve = (curvePoints: CurvePoint[]): string => {
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
    <path
      d={gClefCurve(gCurvePointsOne) + gClefCurve(gCurvePointsTwo)}
      fill='none'
      stroke='currentColor'
      strokeWidth={1.5}
      strokeLinecap='butt'
    />
  );
};

export default GClefCurve;
