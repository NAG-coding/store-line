import { createElement } from 'react';
import { ButtonProps } from './types/button';
import s from './css/elements.module.css';
import { LoadingState } from '../loading-state';

export function Button({
  variant = 'contained',
  children,
  disabled,
  loading,
  ...props
}: ButtonProps) {
  const variantClassname =
    variant === 'contained'
      ? s.button_contained
      : variant === 'outlined'
      ? s.button_outlined
      : s.button_text;

  return createElement(
    'button',
    {
      className: `${s.button} ${variantClassname}`,
      disabled: loading || disabled,
      ...props,
    },
    <>{loading ? <LoadingState /> : children}</>
  );
}
