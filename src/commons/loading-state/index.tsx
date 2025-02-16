import { Icon } from '../icon';
import { LoadingStateProps } from './loading-state';
import s from './css/elements.module.css';

export function LoadingState({ size = 24, color }: LoadingStateProps) {
  return (
    <div
      className={s.container}
      style={{ width: `${size / 10 + 'rem'}`, height: `${size / 10 + 'rem'}` }}>
      <Icon name='loader' color={color} size={size} />
    </div>
  );
}
