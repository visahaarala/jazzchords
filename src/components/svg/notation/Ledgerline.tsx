import { LedgerLineType } from '../../../@types';
import { noteBelowXOffset, notesCx } from './Notation';

const LedgerLine = ({ ledgerLine }: { ledgerLine: LedgerLineType }) => {
  const index = ledgerLine.index;
  let y = 30 - index * 5;

  // place ledger line in every other height, continuing staff
  if (y > 0) {
    y = Math.floor(y / 10) * 10;
  } else {
    y = Math.floor((y + 5) / 10) * 10;
  }

  // center x
  let cx = notesCx;
  if (ledgerLine.hasNoteBelow) {
    cx += noteBelowXOffset;
  }

  const halfWidth = 10;

  if (index <= 0 || index >= 12) {
    return (
      <path
        key={index}
        d={`M${cx - halfWidth} ${y} H${cx + halfWidth}`}
        fill='none'
        stroke='currentColor'
        strokeWidth={1}
      />
    );
  }
  return <></>;
};

export default LedgerLine;
