import {useState} from 'react'
import './App.css';

function App() {
  const[count,setCount]=useState(0);
 
const plusButton=()=>{
  setCount(count+1)
}
const minusButton=()=>{
  setCount(count-1)
}

  return (
    <div className="App">
      <h1>counter is {count}</h1>
      <button onClick={plusButton}>+</button>
      <button onClick={minusButton}>-</button>
    </div>
  );
}

export default App;
