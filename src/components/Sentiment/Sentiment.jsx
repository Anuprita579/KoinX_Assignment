import React from "react";
//Context
import { useScroll } from "../../utils/context/ScrollContext";
//Import
import KeyEvents from "./KeyEvents";
import AnalystEstimate from "./AnalystEstimate";
import styles from "./styles.module.scss";

const Sentiment = () => {
  const { sectionRefs } = useScroll();
  return (
    <div className={styles.sentiment} ref={sectionRefs.Sentiments}>
      <p className={styles.heading}>Sentiment</p>
      <KeyEvents />
      <AnalystEstimate />
    </div>
  );
};

export default Sentiment;
