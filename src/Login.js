import React from "react";
import styles from "./Login.module.css";
import Input from "./general/Input.js";
import Button from "./general/Button.js";

export default class Login extends React.Component {
  render() {
    return (
      <div className={styles.mainSection}>
        <div className={styles.login}>
          <div className={styles.loginHolder}>
            <div className={styles.emailHolder}>
              <Input placeholder="Enter Email/Ph.no" />
            </div>
            <div className={styles.emailHolder}>
              <Input placeholder="Enter Password" />
            </div>
            <div className={styles.buttonHolder}>
              <Button
                height="50px"
                buttonContent="Login"
                onClick={this.props.goToHome}
                backgroundColor="#da1c5c"
              />
            </div>
            <div className={styles.commonText}>
              new user ?
              <span className={styles.link} onClick={this.props.goToSignup}>
                {" "}
                Signup
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
