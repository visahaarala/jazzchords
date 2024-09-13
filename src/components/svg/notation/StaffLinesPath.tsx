const StaffLinesPath = ({
  x,
  yList,
  h,
}: {
  x: number;
  yList: number[];
  h: number;
}) =>
  yList.map((y) => (
    <path
      key={y}
      d={`M${x} ${y} h${h}`}
      fill='none'
      stroke='currentColor'
      strokeWidth={1}
    />
  ));

export default StaffLinesPath;
