import "./App.css";
import React, { useState, useEffect } from "react";

//import components
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filtersHandler = () => {
    switch (filter) {
      case "done":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "notdone":
        setFilteredTodos(todos.filter((todo) => todo.completed !== true));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveInLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getFromLocalStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosFromLocalStorage);
    }
  };

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => {
    filtersHandler();
    saveInLocalStorage();
  }, [todos, filter]);

  return (
    <div className="App">
      <header>My Todo App</header>
      <Form
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
        setFilter={setFilter}
        filter={filter}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
