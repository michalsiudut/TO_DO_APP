import './App.css';
import { CustomAddingbutton, CustomRemovingbutton, CustomEditbutton, CustomSavebutton, CustomCancelbutton } from './components/Buttons';
import { useTasks } from './hooks/useTasks';

const App = () => {
  const {
    task, tasks, addTask, removeTask, setTaskHandler,
    editedIndex, editTask, changeStateTask, setEditedTextHandler,
    saveTask, editedText, useAnimation, isFull, animatingCancelIndex, editAnimationIndex,
    saveAnimationIndex, userNameEdited, setEditedUserNameHandler, setUserNameHandler, userName,
    setUserAgeEditedHandler, setUserAgeHandler, userAge, userAgeEdited
  } = useTasks();



  return (
    <>
      <div className='ZODlabel'>
        <input className='inputZOD' placeholder='Enter your name' value={userNameEdited}
          onChange={(e) => setEditedUserNameHandler(e.target.value)}></input>
        <button className='buttonZOD' onClick={setUserNameHandler}>Apply</button>
      </div>
      <div className='ZODlabel'>
        <input className='inputZOD' placeholder='Enter your age' onChange={(e) => setUserAgeEditedHandler(e.target.value)} value={userAgeEdited}></input>
        <button className='buttonZOD' onClick={setUserAgeHandler}>Apply</button>
      </div>
      <div className='userDiv'>Your name: {userName}</div>
      <div className='userDiv'>Your age: {userAge}</div>

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
                  <CustomEditbutton onClick={() => editTask(t, index)} />
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
