import { useEffect, useState } from 'react';
import './App.css';
import { CustomAddingbutton, CustomRemovingbutton } from './components/Buttons';
import { useTasks } from './hooks/useTasks';

const App = () => {


  const { task, tasks, addTask, removeTask, setTaskHandler } = useTasks();

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
      <CustomAddingbutton onClick={addTask}></CustomAddingbutton>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}  <CustomRemovingbutton onClick={() => removeTask(index)}></CustomRemovingbutton>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
