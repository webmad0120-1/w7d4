import React from "react";
import "./TodoItem.scss";
import moment from "moment";

export default class TodoItem extends React.Component {
  render() {
    return (
      <section className={this.props.done ? "TodoItem item-done" : "TodoItem"}>
        <div className="name">
          <input type="checkbox" />
          <h5 className="name">{this.props.name}</h5>
        </div>
        <div className="actions">
          <button>⭐️</button>
          <button>🗑</button>
          <span>{moment(this.props.createdAt).format("D/MM/YYYY")}</span>
        </div>
      </section>
    );
  }
}
