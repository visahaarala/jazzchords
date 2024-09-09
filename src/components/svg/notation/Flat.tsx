import { Note } from "../../../@types";

const Flat = ({ note }: { note?: Note }) => {
  return (
    <path
      // d='M5 5 V73.7 C 50 50 40 14 7 43 M5 5 V73.7 C 46 50 36 20 7 43'
      d='M5 5 V73.7 C 50 50 40 14 7 43 M5 5 V73.7 C 49 50 37 18 7 43'
      stroke='currentColor'
      strokeWidth={5}
      fill='none'
      strokeLinecap='square'
    />
  );
};

export default Flat;