import React from "react";
import styles from "./ProductImageAndLogo.module.css";
import PropTypes from "prop-types";
export default class ProductImageAndLogo extends React.Component {
  handleClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }
  render() {
    return (
      <div className={styles.base} onClick={() => this.handleClick()}>
        <div className={styles.imageCircleHolder}>
          <div className={styles.imageHolder}>
            <span className={styles.text}>{this.props.text}</span>
          </div>
        </div>
      </div>
    );
  }
}
ProductImageAndLogo.propTypes = {
  onClick: PropTypes.func,
  imageUrl: PropTypes.string,
  logo: PropTypes.string
};
