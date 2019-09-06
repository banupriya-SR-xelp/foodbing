import React, { Component } from "react";
import styles from "./Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <div className={styles.headerBase}>
        <div className={styles.headers}>
          <div className={styles.leftHolder}>
            <span className={styles.text}>Get App</span>
          </div>

          <div className={styles.rightHolder}>
            <span className={styles.text}>Order Food</span>
            <span className={styles.text}>Book Table</span>
            <span className={styles.text}>Coupons</span>
          </div>
        </div>
      </div>
    );
  }
}
