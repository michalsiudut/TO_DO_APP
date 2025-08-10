import { zodResolver } from '@hookform/resolvers/zod';
import './App.css';
import { CustomButton } from './components/Buttons';
import { useTasks } from './hooks/useTasks';
import { useUserProperties } from './hooks/useUserProperites';
import { useForm } from 'react-hook-form'
import { UserForm, userFormSchema } from './validation/userValidation';
import { TaskList } from './components/features/TaskList';

const App = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserForm>({
    resolver: zodResolver(userFormSchema),
  })

  const onSubmit = (data: UserForm) => {
    setUserAgeHandler(data.userAge);
    setUserNameHandler(data.userName);
    reset();
  };

  const {
    task, tasks, addTask, removeTask, setTaskHandler,
    editedIndex, editTask, changeStateTask, setEditedTextHandler,
    saveTask, editedText, useAnimation, isFull, animatingCancelIndex,
    editAnimationIndex, saveAnimationIndex
  } = useTasks();


  const {
    setUserAgeHandler, setUserNameHandler, userAge, userName
  } = useUserProperties();



  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <div className='ZODlabel'>
          <input
            className='inputZOD'
            placeholder='Enter your name'
            {...register('userName')}
          />
          {errors.userName && <p className='errors'>{errors.userName.message}</p>}
        </div>

        <div className='ZODlabel'>
          <input
            className='inputZOD'
            placeholder='Enter your age'
            type="number"
            {...register('userAge', { valueAsNumber: true })}
          />
          {errors.userAge && <p className='errors'>{errors.userAge.message}</p>}
        </div>
        <button className='buttonZOD' type="submit">Apply</button>
        <div className='userDiv'>Your name: {userName}</div>
        <div className='userDiv'>Your age: {userAge}</div>
      </form>

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
