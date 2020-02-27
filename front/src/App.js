import React from "react";
import axios from "axios";
import "./sass/App.scss";
import TodoList from "./TodoList/TodoList";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoList></TodoList>
      </div>
    );
  }
}
