import { FC } from 'react';
import { Button } from '../../../Button/Button';
import styles from './TaskList.module.scss';

interface TaskListProps {
  todos: string[];
  handleDelClick: (text: string) => void;
}

export const TaskList: FC<TaskListProps> = ({ todos, handleDelClick }) => {
  return (
    <>
      {todos.length > 0 ? (
        <ul className={styles.todoList}>
          {todos.map((todo, index) => (
            <div className={styles.todo}>
              <li key={index}>{todo}</li>
              <Button onClick={() => handleDelClick(todo)}>Delete</Button>
            </div>
          ))}
        </ul>
      ) : (
        <div className={styles.empyList}>
          <p>No tasks added yet</p>
        </div>
      )}
    </>
  );
};
