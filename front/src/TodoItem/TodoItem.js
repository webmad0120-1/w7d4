import React from "react";
import "./TodoItem.scss";
import axios from "axios";
import moment from "moment";

export default class TodoItem extends React.Component {
  setTaskAsDone(id, done) {
    this.props.onTaskClicked(id, done)
  }

  render() {
    return (
      <section className={this.props.done ? "TodoItem item-done" : "TodoItem"}>
        <div className="name">
        
        {this.props.done && <input type="checkbox" checked onChange={_ => this.setTaskAsDone(this.props._id, this.props.done)} />}
        {!this.props.done && <input type="checkbox" onChange={_ => this.setTaskAsDone(this.props._id, this.props.done)} />}

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
