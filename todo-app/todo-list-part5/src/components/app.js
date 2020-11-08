import React from 'react'
import TodoItem from './todo-item'
const data = require('./../todo-api-request.json')

// adding event to app and remove the warning on the checked tag
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: data,
    }
  }

  render() {
    let all = this.state.todos.map((todo) => (
      <TodoItem key={todo.id} content={todo} />
    ))
    return <div className="todo-list">{all}</div>
  }
}

export default App
