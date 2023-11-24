import { PropsIcon } from '@/interfaces';
import { FC } from 'react';

export const PurchaseTag: FC<PropsIcon> = ({ size = 20, color = '#fff' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24'>
      <path
        d='M11.707 2.293A.996.996 0 0011 2H6a.996.996 0 00-.707.293l-3 3A.996.996 0 002 6v5c0 .266.105.52.293.707l10 10a.997.997 0 001.414 0l8-8a.999.999 0 000-1.414l-10-10zM8.353 10a1.647 1.647 0 11-.001-3.293A1.647 1.647 0 018.353 10z'
        fill={color}
      />
    </svg>
  );
};
