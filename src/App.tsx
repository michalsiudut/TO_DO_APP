import { CustomButton } from './components/Button';
import { TaskList } from './components/features/TaskList';
import { useEffect } from 'react';
import './index.css';
import { useTaskStore } from './store/taskStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskSchema } from './validation/taskValidation';
import { useForm } from 'react-hook-form';
import { taskSchemaVal } from './validation/taskValidation';

const App = () => {

  useEffect(() => {
    document.title = "Add some tasks!"
  });

  const task = useTaskStore((state) => state.task);
  const addTask = useTaskStore((state) => state.addTask);
  const setTaskHandler = useTaskStore((state) => state.setTaskHandler);
  const setStatus = useTaskStore((state) => state.setStatus);
  const status = useTaskStore((state) => state.status);

  const onSubmit = (data: taskSchemaVal) => {
    reset();
    setStatus(data.state);
    addTask(data.task, data.state as Task['status']);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<taskSchemaVal>({
    resolver: zodResolver(taskSchema)
  })

  return (
    <div className="flex flex-col w-screen bg-[#242424]">
      <header className="mx-auto mt-4 flex h-20 w-[550px] items-center justify-center rounded-2xl border-white text-[40px] shadow-2xl">Welcome to my TO DO</header>
      <form className="flex mx-auto mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col space-y-1'>
          <input
            type="text"
            placeholder="Add task here"
            {...register("task")}
            value={task}
            onChange={setTaskHandler}
            className="mt-2 h-12 p-2 rounded-xl border-2 border-gray-300 focus:border-green-600 focus:ring-green-600 outline-none"
          />
          {errors.task && <p className='text-red-600'>{errors.task.message}</p>}
        </div>
        <div>
          <select className='bg-[#242424] ml-10 border-2 rounded-xl h-12 mt-2 w-40 p-2' {...register("state")}>
            <option value="">Status of task</option>
            <option value="Pending">Pending</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
          </select>
          {errors.state && <p className='text-red-600 ml-10 mt-1'>{errors.state.message}</p>}
        </div>
        <CustomButton
          onClick={() => { }}
          text={<i className="fa-solid fa-plus"></i>}
        />
      </form>

      <TaskList />
    </div>
  );
};

export default App;
