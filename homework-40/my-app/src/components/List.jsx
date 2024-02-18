import React, { Component } from "react";

export default class List extends Component {
  render() {
    let { list, actions } = this.props;

    return Array.isArray(list) && list.length ? (
      <>
        <div className="list">
          <ul>
            {list.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>

          {actions.map((item) => (
            <button key={item.id} onClick={item.action}>
              {item.text}
            </button>
          ))}
        </div>
      </>
    ) : null;
  }
}
