import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const getActiveTasks = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  }

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(getActiveTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  const setTaskHandler = (event) => {
    setTask(event.target.value);
  }

  const addTaskHandler = () => {
    if (task.trim() != '') {
      setTasks(prevTasks => [...prevTasks, task]);
      setTask('');
    }
  }

  const removeTaskHandler = (props) => {
    const updatedTasks = tasks.filter((_, index) => index != props);
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className='header'>
        Welcome to my to do app!
      </div>
      <input type='text'
        placeholder='Add task here'
        value={task}
        onChange={setTaskHandler}>
      </input>
      <button onClick={addTaskHandler}>
        +
      </button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}  <button className='minus' onClick={() => removeTaskHandler(index)}>-</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
