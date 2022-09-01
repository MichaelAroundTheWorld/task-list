import { useState } from 'react';
import { InputTask } from './InputTask/InputTask';
import { TaskList } from './TaskList/TaskList';
import styles from './Main.module.scss';

export const Main = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddClick = () => {
    if (todo) {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const handleDelClick = (text: string) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className={styles.main}>
      <InputTask todo={todo} setTodo={setTodo} handleAddClick={handleAddClick} />
      <TaskList todos={todos} handleDelClick={handleDelClick} />
    </div>
  );
};
