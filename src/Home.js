import React, { Component } from "react";
import styles from "./Home.module.css";
import Header from "./Header";
import ImageWithDesc from "./reusable_components/ImageWithDesc";
import collection from "./jsonData/collection";
import BannerWithIcon from "./BannerWithIcon";
import arrow from "./img/arrow.svg";
import DesktopOnly from "./general/DesktopOnly";

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
                    if (i < 6) {
                      return (
                        <div className={styles.imageWithDescripton} key={i}>
                          <ImageWithDesc
                            header={val.header}
                            subText={val.subtext}
                            image={val.image}
                          />
                        </div>
                      );
                    } else if (i === 6) {
                      return (
                        <DesktopOnly>
                          <div
                            className={styles.imageWithMoreDescripton}
                            key={i}
                          >
                            <ImageWithDesc
                              header={val.header}
                              subText={val.subtext}
                              image={val.image}
                            />

                            <div className={styles.icon}>
                              <div className={styles.image}>
                                <img
                                  src={arrow}
                                  alt="arrow"
                                  width="50px"
                                  height="50px"
                                />
                              </div>
                            </div>
                          </div>
                        </DesktopOnly>
                      );
                    }
                  })}
              </div>
            </div>
            {/* <DesktopOnly>
              <div className={styles.loginHolder}>
                <div className={styles.loginBackgroundHolder}>
                  <div className={styles.login}>
                    <Login />
                  </div>
                </div>
              </div>
            </DesktopOnly> */}
          </div>
        </div>
      </div>
    );
  }
}
