import { CustomButton } from './components/Button';
import { TaskList } from './components/features/TaskList';
import { useEffect } from 'react';
import './index.css';
import { useTaskStore } from './store/taskStore';

const App = () => {

  useEffect(() => {
    document.title = "Add some tasks!"
  });

  const task = useTaskStore((state) => state.task);
  const addTask = useTaskStore((state) => state.addTask);
  const setTaskHandler = useTaskStore((state) => state.setTaskHandler);
  const setStatus = useTaskStore((state) => state.setStatus);
  const status = useTaskStore((state) => state.status);

  return (
    <div className="flex flex-col w-screen bg-[#242424]">
      <header className="mx-auto mt-4 flex h-20 w-[550px] items-center justify-center rounded-2xl border-white text-[40px] shadow-2xl">Welcome to my TO DO</header>
      <section className="flex mx-auto mt-4">
        <input
          type="text"
          placeholder="Add task here"
          value={task}
          onChange={setTaskHandler}
          className="mt-2 rounded-xl border-2 border-gray-300 focus:border-green-600 focus:ring-green-600 outline-none"
        />
        <select className='bg-[#242424] ml-10 border-2 rounded-xl h-12 mt-2' onChange={(e) => setStatus(e.target.value)} value={status}>
          <option value="">Status of task</option>
          <option value="Pending">Pending</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
        </select>
        <CustomButton
          onClick={() => {
            addTask(task, status as Task['status']);
          }}
          text={<i className="fa-solid fa-plus"></i>}
        />
      </section>

      <TaskList />
    </div>
  );
};

export default App;
