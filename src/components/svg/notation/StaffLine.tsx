const StaffLine = ({ y }: { y: number }) => (
  <path
    d={`M10 ${y} H 150`}
    fill='none'
    stroke='currentColor'
    strokeWidth={1}
  />
);

export default StaffLine;
