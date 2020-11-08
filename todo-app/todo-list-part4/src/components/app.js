import React from 'react'
import TodoItem from './todo-item'
const data = require('./../todo-api-request.json')

// we must change App component into a stateful class component and load the
// data into the state objet
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
