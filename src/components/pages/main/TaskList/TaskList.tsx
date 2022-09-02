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
        <div className={styles.wrapper}>
          {todos.map((todo, index) => (
            <>
              <div className={styles.table}>
                <div className={styles.todo}>
                  <ul className={styles.todoList}>
                    <li key={index}>{todo}</li>
                  </ul>
                </div>
                <Button onClick={() => handleDelClick(todo)}>Delete</Button>
              </div>
            </>
          ))}
        </div>
      ) : (
        <div className={styles.empyList}>
          <p>No tasks added yet</p>
        </div>
      )}
    </>
  );
};
