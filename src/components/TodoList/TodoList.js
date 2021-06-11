import React from "react";

import nextId from "react-id-generator";

//Import components
import Todo from "../Todo/Todo";

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
        ))}
      </ul>
    </div>
  );
}
