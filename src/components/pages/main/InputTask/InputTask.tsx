import { FC } from 'react';
import { Button } from '../../../Button/Button';
import { Input } from '../../../Input/Input';
import styles from './InputTask.module.scss';

interface InputTaskProps {
  todo: string;
  setTodo: (text: string) => void;
  handleAddClick?: () => void;
}

export const InputTask: FC<InputTaskProps> = ({ todo, setTodo, handleAddClick }) => {
  return (
    <div className={styles.heading}>
      <Input
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="To do"
        value={todo}
      />
      <Button onClick={handleAddClick} children="Add" />
    </div>
  );
};
