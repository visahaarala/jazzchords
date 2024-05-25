const InfoIcon = ({ color }: { color?: string }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
    <path
      d='M6 9h4v8.5 m-5.5 0 h 11'
      strokeWidth='3.3'
      fill='none'
      stroke={color ? color : 'currentColor'}
    />
    <circle
      cx='10'
      cy='3'
      r='2.3'
      stroke='none'
      fill={color ? color : 'currentColor'}
    />
  </svg>
);

export default InfoIcon;
