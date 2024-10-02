/*
Icon modified from "sunny-outline",
downloaded from https://ionic.io/ionicons with MIT license.
*/

const LightIcon = ({ isOn }: { isOn?: boolean }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeMiterlimit='10'
        strokeWidth={isOn ? '38' : '20'}
        d='M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94'
      />
      <circle
        cx='256'
        cy='256'
        r='80'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeMiterlimit='10'
        strokeWidth={isOn ? '42' : '20'}
      />
    </svg>
  );
};

export default LightIcon;
