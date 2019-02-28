import React, { Component } from "react";
import TodoList from "./TodoList";
import "./App.css";

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default TodoApp;
