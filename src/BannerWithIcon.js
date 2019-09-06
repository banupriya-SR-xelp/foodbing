import React, { Component } from "react";
import styles from "./BannerWithIcon.module.css";
import ProductImageAndLogo from "./ProductImageAndLogo";
export default class BannerWithIcon extends Component {
  render() {
    return (
      <div className={styles.backgroundHolder}>
        <div className={styles.icon}>
          <ProductImageAndLogo text={"Break Fast"} />
        </div>

        <div className={styles.icon}>
          <ProductImageAndLogo text={"Lunch"} />
        </div>

        <div className={styles.icon}>
          <ProductImageAndLogo text={"Snacks"} />
        </div>

        <div className={styles.icon}>
          <ProductImageAndLogo text={"Dinner"} />
        </div>
      </div>
    );
  }
}
