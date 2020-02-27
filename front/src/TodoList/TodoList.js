import React from "react";
import axios from "axios";
import "./TodoList.scss";
import TodoItem from "../TodoItem/TodoItem";

export default class TodoList extends React.Component {
  render() {
    return (
      <section className="TodoList">
        <input type="text" placeholder="add new task" />
        <section>
          <h1>To do (4)</h1>
          <ul>
            <li>
              <TodoItem></TodoItem>
            </li>
            <li>
              <TodoItem></TodoItem>
            </li>
            <li>
              <TodoItem></TodoItem>
            </li>
            <li>
              <TodoItem></TodoItem>
            </li>
            <li>
              <TodoItem></TodoItem>
            </li>
            <li>
              <TodoItem></TodoItem>
            </li>
          </ul>
        </section>

        <section>
          <h1>Done (4)</h1>
          <ul>
            <li>
              <TodoItem></TodoItem>
            </li>
            <li>
              <TodoItem></TodoItem>
            </li>
            <li>
              <TodoItem></TodoItem>
            </li>
            <li>
              <TodoItem></TodoItem>
            </li>
            <li>
              <TodoItem></TodoItem>
            </li>
            <li>
              <TodoItem></TodoItem>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}
