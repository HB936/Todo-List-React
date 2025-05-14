import { useState } from 'react'
import './App.css'
import Input from './Input'
import Display from './Display'

function App() {
  const [todo, setTodo] = useState([])
  const addHandler = (value) => {
    setTodo([...todo, value])
  }

  const removeHandler = (vals) => {
    const filteredData = todo.filter(
      (t, i) => {
        if (i == vals) {
          return false
        }
        else {
          return true
        }
      }
    )
    setTodo(filteredData)
  }
  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="h1">TODO LIST</div>
      </div>
      <Input addHandler={addHandler} />
      <Display items={todo} remHandler={removeHandler} />
    </>
  )
}

export default App
