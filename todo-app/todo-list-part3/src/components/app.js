import React from 'react'
import TodoItem from './todo-item'
const data = require('./../todo.json')

const App = () => {
  let all = data.map((todo) => <TodoItem key={todo.id} content={todo} />)
  return <div className="todo-list">{all}</div>
}

export default App
