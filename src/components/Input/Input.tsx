import { FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

export const Input: FC<InputProps> = ({ onClear, value, ...props }) => {
  return (
    <label className={styles.wrapper}>
      <input className={styles.input} value={value} {...props} />
    </label>
  );
};
