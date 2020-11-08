import React from 'react'

const TodoItem = ({ content }) => {
  console.log(content)
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={content.completed}
        id={content.id}
        name="todo-list"
        value={content.completed}
      />
      <p>{content.text}</p>
    </div>
  )
}

export default TodoItem
