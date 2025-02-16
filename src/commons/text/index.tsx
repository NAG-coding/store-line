import { createElement } from 'react';
import { TextProps } from './types/text';
import s from './css/elements.module.css';

export function Text({
  as = 'p',
  fontSize = 16,
  fontWeight = 400,
  lineHeight = 1.2,
  textAlign = 'left',
  children,
  style,
  error,
  ...props
}: TextProps) {
  return createElement(
    as,
    {
      style: {
        fontSize: `${fontSize / 10}rem`,
        fontWeight,
        lineHeight,
        textAlign,
        ...style,
      },
      className: `${s.text} ${error ? s.text_error : undefined}`,
      ...props,
    },
    children
  );
}
