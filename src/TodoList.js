import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
  state = {
    items: []
  };

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key);

    this.setState({
      items: filteredItems
    });
  };

  addItem = e => {
    if (this._inputElement.value !== "") {
      const newItem = { text: this._inputElement.value, key: Date.now() };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }

    e.preventDefault();
  };
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="type something"
            />
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
