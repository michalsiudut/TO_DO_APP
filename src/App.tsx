import { zodResolver } from '@hookform/resolvers/zod';
import './App.css';
import { CustomAddingbutton, CustomRemovingbutton, CustomEditbutton, CustomSavebutton, CustomCancelbutton } from './components/Buttons';
import { useTasks } from './hooks/useTasks';
import { useUserProperties } from './hooks/useUserProperites';
import { useForm } from 'react-hook-form'
import { UserForm, userFormSchema } from './validation/userValidation';

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
    saveTask, editedText, useAnimation, isFull, animatingCancelIndex, editAnimationIndex,
    saveAnimationIndex
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
          <CustomAddingbutton onClick={addTask} useAnimation={useAnimation} isFull={isFull} />
        </section>

        <ul className='taskList'>
          {tasks.map((t: string, index: number) => (
            <li key={index} className={`taskItem ${animatingCancelIndex == index ? 'crash' : ''}  ${editAnimationIndex == index ? 'edit' : ''} ${saveAnimationIndex == index ? 'save' : ''}`}>
              <span className='taskLabel'>Task {index + 1}</span>
              {editedIndex === index ? (
                <>
                  <input
                    className='inputEdit'
                    value={editedText}
                    onChange={setEditedTextHandler}
                  />
                  <CustomSavebutton onClick={() => saveTask(index)} />
                  <CustomCancelbutton onClick={changeStateTask} />
                </>
              ) : (
                <>
                  <span>{t}</span>
                  <CustomRemovingbutton onClick={() => removeTask(index)} />
                  <CustomEditbutton onClick={() => editTask(t, index)} useEditAnimation={undefined} />
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
