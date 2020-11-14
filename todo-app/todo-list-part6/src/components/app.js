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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState((prevState) => {
      const newTodo = prevState.todos.map((ele) => {
        if (ele.id === id) ele.completed = !ele.completed
        return ele
      })
      console.log(newTodo)
      return {
        todos: newTodo,
      }
    })
  }

  render() {
    let all = this.state.todos.map((todo) => (
      <TodoItem key={todo.id} content={todo} handleChange={this.handleChange} />
    ))
    return <div className="todo-list">{all}</div>
  }
}

export default App
