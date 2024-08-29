import { KeyboardEvent } from 'react';

const Lock = ({
  isLocked,
  onClick,
  tabIndex,
}: {
  isLocked?: boolean;
  onClick?: () => void;
  tabIndex?: boolean;
}) => {
  const keyDownHandler = (e: KeyboardEvent<SVGSVGElement>) => {
    if ((e.code === 'Space' || e.code === 'Enter') && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='16 4 68 87'
      onClick={onClick}
      onKeyDown={(e) => keyDownHandler(e)}
      tabIndex={tabIndex ? 0 : undefined}
    >
      <path d='M17 55 V 90 H 83 V 55z' fill='currentColor' />
      <path
        d={
          !isLocked
            ? 'M30 60 C 30 10 30 10 50 10 C 70 10 70 10 70 35'
            : 'M30 60 C 30 30 30 30 50 30 C 70 30 70 30 70 60'
        }
        strokeWidth={10}
        fill='none'
        stroke='currentColor'
      />
    </svg>
  );
};

export default Lock;
