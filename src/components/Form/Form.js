import React from "react";
import nextId from "react-id-generator";

export default function Form({
  setInputText,
  setTodos,
  todos,
  inputText,
  filter,
  setFilter,
}) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    inputText.length !== 0
      ? setTodos([
          ...todos,
          { text: inputText, completed: false, id: nextId() },
        ])
      : alert("Field empty");
    setInputText("");
  };

  const filterHandler = (e) => {
    setFilter(e.target.value);
    console.log(filter);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={filterHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="notdone">In Progress</option>
        </select>
      </div>
    </form>
  );
}
