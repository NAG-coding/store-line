import { Theme } from '@/utils/types/theme';
import { icons } from './icons';
import { SvgProps } from './svg/svg';

export type IconType = keyof typeof icons;

export interface IconProps extends Omit<SvgProps, 'color'> {
  color?: keyof Theme;
  name: IconType;
}
