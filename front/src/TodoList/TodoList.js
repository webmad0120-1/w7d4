import React from "react";
import axios from "axios";
import "./TodoList.scss";
import TodoItem from "../TodoItem/TodoItem";

export default class TodoList extends React.Component {
  state = {
    todo: [
      {
        fav: true,
        done: false,
        _id: "5e57882c6972fbfb7547eef4",
        name: "Task 1",
        createdAt: "2020-02-27T09:13:16.983Z"
      },
      {
        fav: true,
        done: false,
        _id: "5e57882c6972fbfb7547eef5",
        name: "Task 2",
        createdAt: "2020-02-27T09:13:16.983Z"
      },
      {
        fav: true,
        done: false,
        _id: "5e57882c6972fbfb7547eef6",
        name: "Task 3",
        createdAt: "2020-02-27T09:13:16.983Z"
      }
    ],
    done: [
      {
        fav: true,
        done: true,
        _id: "5e57882c6972fbfb7547eea1",
        name: "Task 1 done",
        createdAt: "2020-02-27T09:13:16.983Z"
      },
      {
        fav: true,
        done: true,
        _id: "5e57882c6972fbfb7547eea2",
        name: "Task 2 done",
        createdAt: "2020-02-27T09:13:16.983Z"
      },
      {
        fav: true,
        done: true,
        _id: "5e57882c6972fbfb7547eea3",
        name: "Task 3 done",
        createdAt: "2020-02-27T09:13:16.983Z"
      },
      {
        fav: true,
        done: true,
        _id: "5e57882c6972fbfb7547eea4",
        name: "Task 4 done",
        createdAt: "2020-02-27T09:13:16.983Z"
      }
    ]
  };
  render() {
    return (
      <section className="TodoList">
        <input type="text" placeholder="add new task" id="add-task" />
        <section className="to-do">
          <h1>To do ({this.state.todo.length})</h1>
          <ul>
            {this.state.todo.map(task => (
              <li>
                <TodoItem {...task}></TodoItem>
              </li>
            ))}
          </ul>
        </section>

        <section className="done">
          <h1>Done ({this.state.done.length})</h1>
          <ul>
            {this.state.done.map(task => (
              <li>
                <TodoItem {...task}></TodoItem>
              </li>
            ))}
          </ul>
        </section>
      </section>
    );
  }
}
