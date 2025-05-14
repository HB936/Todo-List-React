import { useState } from 'react'
import './App.css'
import Input from './Input'
import Display from './Display'

function App() {
  const [todo, setTodo] = useState([])
  const addHandler=(value)=>{
    setTodo([...todo, value])
  }

  const removeHandler=(vals)=>{
    const filteredData=todo.filter(
      (t,i) => {
        if(i==vals){
          return false
        }
        else{
          return true
        }
      }
    )
    setTodo(filteredData)
  }
  return (
    <>
      <Input addHandler={addHandler}/>
      <Display items={todo} remHandler={removeHandler}/>
    </>
  )
}

export default App
