import React from "react";
import axios from "axios";
import "./TodoList.scss";
import TodoItem from "../TodoItem/TodoItem";

export default class TodoList extends React.Component {
  state = {
    todo: [],
    done: []
  };

  componentDidMount() {
    axios.get("http://localhost:4000/tasks/all").then(allTasks => {
      allTasks = allTasks.data;

      this.setState({
        todo: allTasks.filter(task => !task.done),
        done: allTasks.filter(task => task.done)
      });
    });
  }

  render() {
    return (
      <section className="TodoList">
        <input type="text" placeholder="add new task" id="add-task" />
        <section className="to-do">
          <h1>To do ({this.state.todo.length})</h1>
          <ul>
            {this.state.todo.map(task => (
              <li key={task._id}>
                <TodoItem {...task}></TodoItem>
              </li>
            ))}
          </ul>
        </section>

        <section className="done">
          <h1>Done ({this.state.done.length})</h1>
          <ul>
            {this.state.done.map(task => (
              <li key={task._id}>
                <TodoItem {...task}></TodoItem>
              </li>
            ))}
          </ul>
        </section>
      </section>
    );
  }
}
