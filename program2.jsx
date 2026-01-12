import { useState } from "react";

function Todolist() {
  const [tasks, setTask] = useState([])
  const [text, setText] = useState("")

  const addTask = () => {
    setTask([...tasks, { name: text, completed: false }])
  }

  const deleteTask = (index) => {
    setTask(tasks.filter((_, i) => i !== index))
  }
  return (
    <>
      <h1>To-Do List</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Task"></input>
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox"
              checked={tasks.completed} />
            <span className={tasks.completed?"done":""}>{task.name}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todolist;
