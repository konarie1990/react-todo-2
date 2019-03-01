import React, { Component } from "react";
import TodoList from "./TodoList";
import "./index.css";

class TodoApp extends Component {
  render() {
    return (
      <div className="container">
        <TodoList />
      </div>
    );
  }
}

export default TodoApp;
