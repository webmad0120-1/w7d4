import React from "react";
import "./TodoItem.scss";

export default class TodoItem extends React.Component {
  render() {
    return (
      <section className="TodoItem">
        <input type="checkbox"/>
        <h5>Task</h5>
      </section>
    );
  }
}
