import React, { Component } from "react";
import styles from "./App.module.css";
import Home from "./Home";
export default class App extends Component {
  render() {
    return (
      <div className={styles.base}>
        <Home />
      </div>
    );
  }
}
