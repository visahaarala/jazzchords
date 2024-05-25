const PlayIcon = ({ color }: { color?: string }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
    <path d='M2 2 L 18 10 L 2 18 z' fill={color ? color : 'currentColor'} />
  </svg>
);

export default PlayIcon;
