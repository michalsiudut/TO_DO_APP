import './App.css';
import { CustomAddingbutton, CustomRemovingbutton, CustomEditbutton } from './components/Buttons';
import { useTasks } from './hooks/useTasks';

const App = () => {


  const { task, tasks, addTask, removeTask, setTaskHandler, isEdited, editTask } = useTasks();

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
      <li>
        {tasks.map((t, index) => (
          <li key={index} className='container'>
            Task {index}.
            {isEdited ? <div>elo</div> : <div>elo2</div>}{t}  <CustomRemovingbutton onClick={() => removeTask(index)}></CustomRemovingbutton>  <CustomEditbutton onClick={() => editTask(t, index)}></CustomEditbutton>
          </li>
        ))}
      </li>
    </>
  );
};

export default App;
