import React from 'react'

const TodoItem = ({ content }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={content.completed}
        id={content.id}
        name="todo-list"
        value={content.completed}
        onChange={() => console.log("now it is going to change!!!")}
      />
      <p>{content.text}</p>
    </div>
  )
}

export default TodoItem
