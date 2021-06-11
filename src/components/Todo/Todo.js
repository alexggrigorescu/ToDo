import React from "react";

import "./styles.css";

export default function Todo({ todo, todos, setTodos }) {
  const handleComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleDelete = () => {
    console.log(todo);
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : null}`}>
        {todo.text}
      </li>
      <button onClick={handleComplete}>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
