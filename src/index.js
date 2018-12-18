import "./config/Reactotronconfig";
import "./config/DevToolsConfig";

import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";

import Routes from "./routes";

const bgColor = "#FFFFFF";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bgColor
  }
});

export default class App extends Component {
  render() {
    return <Routes />;
  }
}
