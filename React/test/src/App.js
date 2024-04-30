import logo from './logo.svg';
import './App.css';
import { useState, useTransition, useDeferredValue, useEffect } from "react"

let a = new Array(10000).fill(0)

function App() {
  let [name, setName] = useState('')
  let [isPending, 늦게처리] = useTransition()
  let state = useDeferredValue(name)
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);

  useEffect(()=>{
    if (count != 0 && count < 3) setAge(age+1)
  },[count])

  return (
    <div className="App">
      <input onChange={(e) => {
        늦게처리(() => {
          setName(e.target.value)
        })
      }} />
      {
        isPending ? '잠시만요' :
        a.map(() => {
          return <div>{state}</div>
        })
      }
      
      <div>안녕하십니까 전 {age}</div>
      <button onClick={()=>{
        setCount(count+1)
      }}>누르면한살먹기</button>

    </div>
  );
}

export default App;
