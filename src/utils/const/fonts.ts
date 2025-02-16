import { Open_Sans, Roboto } from 'next/font/google';

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font_open_sans',
  adjustFontFallback: true,
  weight: ['400', '600'],
});

export const robobo = Roboto({
  subsets: ['latin'],
  variable: '--font_roboto',
  adjustFontFallback: true,
  weight: ['700'],
});
