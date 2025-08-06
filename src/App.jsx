import './App.css';
import { CustomAddingbutton, CustomRemovingbutton, CustomEditbutton, CustomSavebutton, CustomCancelbutton } from './components/Buttons';
import { useTasks } from './hooks/useTasks';

const App = () => {
  const {
    task, tasks, addTask, removeTask, setTaskHandler,
    editedIndex, editTask, changeStateTask, setEditedTextHandler,
    saveTask, editedText, useAnimation, isFull, animatingCancelIndex, editAnimationIndex
  } = useTasks();

  return (
    <div className="app">
      <header className='header'>
        Welcome to my TO DO
      </header>

      <section className='inputSection'>
        <input
          type='text'
          placeholder='Add task here'
          value={task}
          onChange={setTaskHandler}
          className="inputTask"
        />
        <CustomAddingbutton onClick={addTask} useAnimation={useAnimation} isFull={isFull} />
      </section>

      <ul className='taskList'>
        {tasks.map((t, index) => (
          <li key={index} className={`taskItem ${animatingCancelIndex == index ? 'crash' : ''}  ${editAnimationIndex === index ? 'edit' : ''}`}>
            <span className='taskLabel'>Task {index + 1}.</span>
            {editedIndex === index ? (
              <>
                <input
                  className='inputEdit'
                  value={editedText}
                  onChange={setEditedTextHandler}
                />
                <CustomSavebutton onClick={saveTask} />
                <CustomCancelbutton onClick={changeStateTask} />
              </>
            ) : (
              <>
                <span>{t}</span>
                <CustomRemovingbutton onClick={() => removeTask(index)} />
                <CustomEditbutton onClick={() => editTask(t, index)} />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
