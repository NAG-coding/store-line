import { PropsIcon } from '@/interfaces';
import { FC } from 'react';

export const Edit: FC<PropsIcon> = ({ size = 20, color = '#fff' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
      <path d='M16 2.012l3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z' fill={color} />
    </svg>
  );
};
