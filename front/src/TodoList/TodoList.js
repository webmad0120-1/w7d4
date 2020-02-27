import React from "react";
import axios from "axios";
import "./TodoList.scss";
import TodoItem from "../TodoItem/TodoItem";

export default class TodoList extends React.Component {
  render() {
    return (
      <section className="TodoList">
        <input type="text" placeholder="add new task" id="add-task" />
        <section className="to-do">
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

        <section className="done">
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
