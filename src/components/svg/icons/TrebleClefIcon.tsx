import TrebleClefPath from '../notation/TrebleClefPath';

const TrebleClefIcon = ({
  hide,
  height,
}: {
  hide: boolean;
  height: number;
}) => {
  const svgX = 19;
  const svgY = -36.5;
  const svgWidth = 23.5;
  const svgHeight = 70;

  const styleHeight = height + 'rem';
  const styleWidth = height * (svgWidth / svgHeight) + 'rem';

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`${svgX} ${svgY} ${svgWidth} ${svgHeight}`}
      style={{
        height: styleHeight,
        width: styleWidth,
        transform: `scaleX(${hide ? 0 : svgHeight / svgWidth})`,
        transition: hide ? 'transform .15s' : 'transform .15s .15s',
      }}
    >
      <TrebleClefPath />
    </svg>
  );
};

export default TrebleClefIcon;
