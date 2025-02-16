import { InputProps } from './types/input';
import s from './css/elements.module.css';
import { memo } from 'react';

export function MemoizedInput({ name, label, ...props }: InputProps) {
  return (
    <div className={s.group}>
      <label htmlFor={name} className={s.label}>
        {label}
      </label>

      <input id={name} name={name} className={s.input} {...props} />
    </div>
  );
}

export const Input = memo(MemoizedInput);
