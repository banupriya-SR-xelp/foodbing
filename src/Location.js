import React, { Component } from "react";
import styles from "./Location.module.css";
import location from "./img/location.png";
import Input from "./general/Input.js";
import Button from "./general/Button";
import Modal from "react-responsive-modal";
const YOUR_API_KEY = `AIzaSyAqkKpQBlLTJwxAjtSKe3Dz7-GUn9xPfd8`;
export default class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pincode: null,
      city: null,
      hidePopup: true,
      showPincode: false
    };
  }
  componentDidMount = () => {
    this.handleLocationDetector();
  };
  showPosition = async position => {
    let Latitude = position.coords.latitude;
    let Longitude = position.coords.longitude;
    //API to get pincode and city
    let userLocation = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${Latitude},${Longitude}&key=${YOUR_API_KEY}`
    );
    const resultJson = await userLocation.json();
    let city =
      resultJson &&
      resultJson.results &&
      resultJson.results[0] &&
      resultJson.results[0].address_components &&
      resultJson.results[0].address_components.filter(val => {
        return val.types.includes("sublocality");
      });
    let postal_code =
      resultJson &&
      resultJson.results &&
      resultJson.results[0] &&
      resultJson.results[0].address_components &&
      resultJson.results[0].address_components.filter(val => {
        return val.types.includes("postal_code");
      });
    this.setState({
      pincode: postal_code[0].short_name,
      city: city[0].short_name,
      showPincode: true
    });
  };
  error = () => {
    this.setState({ hidePopup: false, showPincode: false });
  };
  updatePincode = () => {
    this.setState({ hidePopup: true, showPincode: true });
  };
  handleLocationDetector = () => {
    if (navigator.geolocation) {
      //geoLocation  to get lat and long
      navigator.geolocation.getCurrentPosition(this.showPosition, this.error, {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 1000
      });
    } else {
      this.error();
    }
  };
  render() {
    return (
      <div className={styles.location}>
        {this.state.showPincode && this.state.pincode ? (
          <div
            className={styles.pincode}
            onClick={() => this.setState({ hidePopup: false })}
          >
            {this.state.pincode} {this.state.city}
          </div>
        ) : (
          <img
            width="25px"
            height="25px"
            src={location}
            alt="loc"
            onClick={() => this.setState({ hidePopup: false })}
          />
        )}
        <Modal open={!this.state.hidePopup} onClose={this.updatePincode} center>
          <div className={styles.inputHolder}>
            <div className={styles.input}>
              <Input
                type="number"
                value={this.state.pincode}
                onChange={evt => this.setState({ pincode: evt })}
                placeholder={"Enter Pincode"}
              />
            </div>
            <div className={styles.input}>
              <Button
                height="50px"
                buttonContent="Submit"
                onClick={this.updatePincode}
                backgroundColor="#da1c5c"
                text={"14px"}
              />
            </div>
          </div>
        </Modal>
        {/* {!this.state.hidePopup && (
            
          <div className={styles.manualPincodeHolder}>
            <div className={styles.inputHolder}>
              <div className={styles.input}>
                <Input
                  type="number"
                  value={this.state.pincode}
                  onChange={evt => this.setState({ pincode: evt })}
                  placeHolder={"Enter Pincode"}
                />
              </div>
              <Button
                height="50px"
                buttonContent="Submit"
                onClick={this.updatePincode}
                backgroundColor="#da1c5c"
                text={"14px"}
              />
            </div>
          </div>
        )} */}
      </div>
    );
  }
}
