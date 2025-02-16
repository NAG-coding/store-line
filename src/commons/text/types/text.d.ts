import { DetailedHTMLProps, HTMLAttributes, ReactElement, ReactHTML } from 'react';

export interface TextProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>,
    'className'
  > {
  fontSize?: number;
  fontWeight?: 400 | 600 | 700;
  textAlign?: 'center' | 'left' | 'right';
  lineHeight?: number;
  as?: keyof ReactHTML;
  error?: boolean;
}
