const NotesIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='2 3 90 90'
    //
    // style={{ backgroundColor: 'orangered' }}
  >
    <ellipse cx={20} cy={80} rx={15} ry={12} fill='currentColor' />
    <ellipse cx={70} cy={65} rx={15} ry={12} fill='currentColor' />
    <path
      d={'M31 80 V 25L81 10V65' + 'M31 29L81 14'}
      stroke='currentColor'
      strokeWidth={8}
      fill='none'
    />
  </svg>
);

export default NotesIcon;
