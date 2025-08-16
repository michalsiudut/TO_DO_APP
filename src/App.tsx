import { CustomButton } from './components/Button';
import { useTasks } from './hooks/useTasks';
import { TaskList } from './components/features/TaskList';
import { useEffect } from 'react';
import './index.css';

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
    <div className="flex flex-col w-screen bg-[#242424]">
      <header className="mx-auto mt-4 flex h-20 w-[550px] items-center justify-center rounded-2xl border-white text-[40px] shadow-2xl">Welcome to my TO DO</header>

      <section className="flex mx-auto">
        <input
          type="text"
          placeholder="Add task here"
          value={task}
          onChange={setTaskHandler}
          className="mt-2 rounded-xl border-2 border-gray-300 focus:border-green-600 focus:ring-green-600 outline-none"
        />
        <CustomButton
          onClick={addTask}
          useEditAnimation={true}
          useAnimation={useAnimation}
          isFull={isFull}
          text={<i className="fa-solid fa-plus"></i>}
          clas="plusAnimation"
        />
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
  );
};

export default App;
