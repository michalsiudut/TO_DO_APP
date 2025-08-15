import { CustomButton } from './components/Buttons';
import { useTasks } from './hooks/useTasks';
import { TaskList } from './components/features/TaskList';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    document.title = "Add some tasks!"
  });

  const {
    task, tasks, addTask, removeTask, setTaskHandler,
    editedIndex, editTask, changeStateTask, setEditedTextHandler,
    saveTask, editedText, useAnimation, isFull, animatingCancelIndex,
    editAnimationIndex, saveAnimationIndex
  } = useTasks();


  return (
    <>
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
          <CustomButton
            onClick={addTask}
            useEditAnimation='true'
            useAnimation={useAnimation}
            isFull={isFull}
            text={<i className="fa-solid fa-plus"></i>}
            clas="plusAnimation" />
        </section>
        <TaskList
          tasks={tasks}
          removeTask={removeTask}
          editedIndex={editedIndex}
          editTask={editTask}
          changeStateTask={changeStateTask}
          setEditedTextHandler={setEditedTextHandler}
          saveTask={saveTask}
          editedText={editedText}
          useAnimation={useAnimation}
          isFull={isFull}
          animatingCancelIndex={animatingCancelIndex}
          editAnimationIndex={editAnimationIndex}
          saveAnimationIndex={saveAnimationIndex}
        />
      </div>
    </>
  );
};

export default App;
