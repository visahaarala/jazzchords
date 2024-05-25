const MetronomeIcon = ({ color }: { color?: string }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
    <path
      d='M4 18L8 3L12 3L16 18z'
      stroke={color ? color : 'currentColor'}
      strokeWidth='2.2'
      fill='none'
    />
    <path
      d='M10 14L18 3'
      stroke={color ? color : 'currentColor'}
      strokeWidth='2.2'
      fill='none'
    />
  </svg>
);

export default MetronomeIcon;
