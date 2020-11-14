import React from 'react'

const TodoItem = ({ handleChange, content }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={content.completed}
        id={content.id}
        // name="todo-list"
        // value={content.completed}
        onChange={() => handleChange(content.id)}
      />
      <p>{content.text}</p>
    </div>
  )
}

export default TodoItem
