import { LinkProps } from 'next/link';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  rounded?: boolean;
  loading?: boolean;
}
