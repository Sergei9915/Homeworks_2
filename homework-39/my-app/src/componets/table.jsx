import React, { Component } from "react";
import "./table.css";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export class Table extends Component {
  constructor(props) {
    super(props);

    const activeItemList = setInterval(() => {
      let randomIndex = getRandomInt(0, this.state.listIndex.length);
      let randomItem = this.state.listIndex[randomIndex];

      this.state.list[randomItem].active = true;
      this.state.listIndex.splice(randomIndex, 1);

      if (!this.state.listIndex.length) {
        clearInterval(activeItemList);
        this.state.borderWidth = "20px";
      }

      if (
        this.state.listIndex.length === Math.floor(this.state.list.length / 2)
      ) {
        this.state.borderWidth = "10px";
      }

      this.setState({});
    }, 2000);
  }

  state = {
    list: this.props.list,
    styleItem: { color: "green", fontWeight: "bold" },
    listIndex: Object.keys(this.props.list),
    borderWidth: 0,
  };

  render() {
    return (
      <table style={{ borderWidth: this.state.borderWidth }}>
        <tbody>
          {this.state.list.map((item) => (
            <tr style={item.active && this.state.styleItem} key={item.id}>
              <td>{item.type}</td>
              <td>{item.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
