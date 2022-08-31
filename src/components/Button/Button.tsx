import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ onClick, children, ...props }) => {
  return <button> {children} </button>;
};
