import './App.css';
import { CustomAddingbutton, CustomRemovingbutton, CustomEditbutton } from './components/Buttons';
import { useTasks } from './hooks/useTasks';

const App = () => {


  const { task, tasks, addTask, removeTask, setTaskHandler, editedIndex, editTask, changeStateTask, setEditedTextHandler, saveTask, editedText, useAnimation, isFull } = useTasks();

  return (
    <>
      <div className='header'>
        Welcome to yours TO DO
      </div>
      <input type='text'
        placeholder='Add task here'
        value={task}
        onChange={setTaskHandler}>
      </input>
      <CustomAddingbutton onClick={addTask} useAnimation={useAnimation} isFull={isFull}></CustomAddingbutton>
      <li>
        {tasks.map((t, index) => (
          <li key={index} className='container'>
            Task {index + 1}.
            {(editedIndex == index) ?
              <><input className='input1' value={editedText} onChange={setEditedTextHandler}></input> <button onClick={saveTask}>Save</button> <button onClick={changeStateTask}>Cancel</button></>
              :
              <>{t}<CustomRemovingbutton onClick={() => removeTask(index)} />  <CustomEditbutton onClick={() => editTask(t, index)} /></>}
          </li>
        ))}
      </li>
    </>
  );
};

export default App;
