import React, { Component } from "react";
import styles from "./Home.module.css";
import Header from "./Header";
import ImageWithDesc from "./reusable_components/ImageWithDesc";
import collection from "./jsonData/collection";
import Login from "./Login";
import BannerWithIcon from "./BannerWithIcon";
import DesktopOnly from "./general/DesktopOnly.js";

export default class Home extends Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.headerHolder}>
          <Header />
        </div>
        <div className={styles.backgroundHolder}>
          <BannerWithIcon />
        </div>

        <div className={styles.collectionHolder}>
          <div className={styles.heading}>Collections</div>
          <div className={styles.subHeading}>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Bengaluru, based on trends
          </div>
          <div className={styles.loginCollectionHolder}>
            <div className={styles.holder}>
              <div className={styles.collection}>
                {collection &&
                  collection.map((val, i) => {
                    return (
                      <div className={styles.imageWithDescripton} key={i}>
                        <ImageWithDesc
                          header={val.header}
                          subText={val.subtext}
                          image={val.image}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <DesktopOnly>
              <div className={styles.loginHolder}>
                <div className={styles.loginBackgroundHolder}>
                  <div className={styles.login}>
                    <Login />
                  </div>
                </div>
              </div>
            </DesktopOnly>
          </div>
        </div>
      </div>
    );
  }
}
