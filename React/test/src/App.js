import logo from './logo.svg';
import './App.css';
import { useState, useTransition, useDeferredValue } from "react"

let a = new Array(10000).fill(0)

function App() {
  let [name, setName] = useState('')
  let [isPending, 늦게처리] = useTransition()
  let state = useDeferredValue(name)

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

    </div>
  );
}

export default App;
