import React from "react";
import styles from "./Button.module.css";

export default class Button extends React.Component {
  render() {
    return (
      <div
        className={styles.button}
        style={{
          fontSize: this.props.text,
          background: this.props.backgroundColor,
          width: this.props.width
        }}
        onClick={this.props.onClick}
      >
        {this.props.buttonContent}
      </div>
    );
  }
}
