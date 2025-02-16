import { icons } from './icons';
import { IconProps } from './types/icon';

export function Icon({ name, size = 24, color = 'mainColor' }: IconProps) {
  const IconElement = icons[name];

  return <IconElement size={size} />;
}
