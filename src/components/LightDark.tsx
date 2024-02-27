import { KeyboardEvent, useEffect, useState } from 'react';

/*
This component handles the light/dark mode of the whole program
*/
const LightDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // set variables at root
    const root = document.documentElement;
    const github = document.querySelector('a.github');
    github?.setAttribute('background-color', 'red');
    if (isDarkMode) {
      root.style.setProperty('--color-white', '#202428');
      root.style.setProperty('--color-gray-light', '#444');
      root.style.setProperty('--color-gray-dark', '#bbb');
      root.style.setProperty('--color-black', '#fafafa');
      // background-image: url('./img/github-mark-white.png');

      // root.style.setProperty(
      //   '--github-image',
      //   'url("./img/github-mark-white.png")'
      // );
      root.style.setProperty('--icon-filter', 'none');
    } else {
      root.style.setProperty('--color-white', 'white');
      root.style.setProperty('--color-gray-light', '#ddd');
      root.style.setProperty('--color-gray-dark', '#444');
      root.style.setProperty('--color-black', '#202428');
      // root.style.setProperty('--github-image', 'url("./img/github-mark.png")');
      root.style.setProperty('--icon-filter', 'invert(1)');
    }
  }, [isDarkMode]);

  return (
    <div
      className='lightdark'
      tabIndex={0}
      onClick={setIsDarkMode.bind(null, !isDarkMode)}
      onKeyDown={keyDownHandler}
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='2.4 2 20 20'>
        <circle cx='12.4' cy='12' r='10' fill='var(--color-black)' />
        <path
          d='M 16 6 A 6 6 0 0 0 16 18 A 6.8 6.8 0 1 1 16 6'
          fill='var(--color-white)'
          stroke='none'
        />
      </svg>
    </div>
  );
};

export default LightDark;
