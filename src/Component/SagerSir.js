
import React,{useState} from 'react'

function TodoList() {
    const [todos, setTodos] = useState(['sfgdjf','sdfds'])
  return (
    <div>
    <button onClick={() => setTodos([...todos, 'sgr'])}>Add</button>
      {todos.map(todo => (
        <h1>{todo}</h1>
      ))}
    </div>
  )
}

export default TodoList
