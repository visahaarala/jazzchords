import { FC, ReactNode } from 'react';

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className='container'
      onClick={() => {
        console.log('container');
      }}
    >
      {children}
    </div>
  );
};

export default Container;
