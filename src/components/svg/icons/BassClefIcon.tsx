import BassClefPath from '../notation/BassClefPath';

const BassClefIcon = ({
  height,
  hide,
}: {
  height: number;
  hide: boolean;
}) => {
  const svgx = 16.8;
  const svgy = -20.8;
  const svgWidth = 27;
  const svgHeight = 39;

  const styleHeight = height + 'rem';
  const styleWidth = height * (svgWidth / svgHeight) + 'rem';

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`${svgx} ${svgy} ${svgWidth} ${svgHeight}`}
      style={{
        height: styleHeight,
        width: styleWidth,
        transform: `scaleX(${hide ? 0 : svgHeight / svgWidth})`,
        transition: hide ? 'transform .15s' : 'transform .15s .15s',
      }}
    >
      <BassClefPath />
    </svg>
  );
};

export default BassClefIcon;
