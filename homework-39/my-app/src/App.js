import React, { Component } from "react";
import { Table } from "./componets/table";

const animals = [
  { type: `turtle`, icon: `🐢`, id: "1" },
  { type: `octopus`, icon: `🐙`, id: "2" },
  { type: `fish`, icon: `🐠`, id: "3" },
  { type: `flamingo`, icon: `🦩`, id: "4" },
  { type: `penguin`, icon: `🐧`, id: "5" },
];

export default class App extends Component {
  render() {
    return <Table list={animals} />;
  }
}
