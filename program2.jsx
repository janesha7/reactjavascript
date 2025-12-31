import React, { useState } from 'react'

const Counter = () => {
  const[tasks,setTask]=useState([])
  const[text,setText]=useState("")
  const addTask=()=>{
    if(text === "") return;
    setTask([...tasks,{name:text,completd: false}])
    setText("")
  }
  return (
    <>
      <h1>To-Do List</h1>
      <input 
      value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder='Enter Task'
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task,index)=>(
            <li key={index}>
                {task.name}
            </li>

        ))}
      </ul>
      
    </>
  )
}

export default Counter;
