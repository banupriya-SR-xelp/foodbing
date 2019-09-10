import React, { Component } from "react";
import styles from "./Header.module.css";
import DesktopOnly from "./general/DesktopOnly.js";
import MobileOnly from "./general/MobileOnly.js";
import Location from "./Location";
export default class Header extends Component {
  render() {
    return (
      <div className={styles.headerBase}>
        <DesktopOnly>
          <div className={styles.headers}>
            <div className={styles.leftHolder}>
              <span className={styles.leftText}>FoodBing</span>
              <span className={styles.text}>Get App</span>
              <span className={styles.text}>Order Food</span>
              <span className={styles.text}>Book Table</span>
              <span className={styles.text}>Coupons</span>
            </div>

            <div className={styles.rightHolder}>
              <span className={styles.text}>
                <Location />
              </span>
            </div>
          </div>
        </DesktopOnly>
        <MobileOnly>
          <div className={styles.headers}>
            <div className={styles.leftHolder}>
              <span className={styles.leftText}>FoodBing</span>
            </div>
            <div className={styles.rightHolder}>
              {/* <span className={styles.text}>Login</span> */}
              <span className={styles.text}>
                <Location />
              </span>
            </div>
          </div>
        </MobileOnly>
      </div>
    );
  }
}
