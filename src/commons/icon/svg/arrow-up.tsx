import { FC } from 'react';
import { SvgProps } from './svg';

export const ArrowUp: FC<SvgProps> = ({ size, color }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill={color}>
      <path d='M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z' />
    </svg>
  );
};
