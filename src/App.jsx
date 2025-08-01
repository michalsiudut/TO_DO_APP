import { useEffect, useState } from 'react';
import './App.css'

function App() {


  const [count, SetCount] = useState(0);


  useEffect(() => {
    document.title = `U clicked ${count} times`;
  }, [count]);

  const addingHandler = () => {
    SetCount(count + 1);
  }

  const removingHandler = () => {
    SetCount(count - 1);
  }
  return (
    <div className='container'>
      <p>Count: {count}</p>
      <div className='buttons'>
        <button onClick={addingHandler} style={{ margin: "0 0.5rem" }}>Add +</button>
        <button onClick={removingHandler} style={{ margin: "0 0.5rem" }}>Minus -</button>
      </div>
    </div>
  )
}

export default App
