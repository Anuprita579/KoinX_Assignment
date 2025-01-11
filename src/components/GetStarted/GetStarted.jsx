import React from "react";
import getStartedImg from "../../assets/getStarted.png";
import styles from "./styles.module.scss";

const GetStarted = () => {
  return (
    <div className={styles.getStartedCard}>
      <p className={styles.heading}>Get Started with KoinX for FREE</p>
      <p className={styles.description}>
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>

      <img
        src={getStartedImg}
        alt="get satrted"
        className={styles.getStartedImg}
      />

      <button className={styles.cta}>Get Started for FREE</button>
    </div>
  );
};

export default GetStarted;
