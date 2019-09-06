import React, { Component } from "react";
import styles from "./ImageWithDesc.module.css";

export default class ImageWithDesc extends Component {
  render() {
    return (
      <div className={styles.imageWithDescription}>
        <div className={styles.holder}>
          <div className={styles.image}>
            <img
              width="100%"
              height="100%"
              alt={"foodIcon"}
              src={this.props.image}
            />
          </div>
          <div className={styles.description}>
            <div className={styles.heading}>{this.props.header}</div>
            <div className={styles.subText}>{this.props.subText}</div>
          </div>
        </div>
      </div>
    );
  }
}
