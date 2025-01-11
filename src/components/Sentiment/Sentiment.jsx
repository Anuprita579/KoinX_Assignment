import React from 'react'
import KeyEvents from './KeyEvents'
import styles from "./styles.module.scss";
import AnalystEstimate from './AnalystEstimate';

const Sentiment = () => {
  return (
    <div className={styles.sentiment}>
      <p className={styles.heading}>Sentiment</p>
      <KeyEvents />
      <AnalystEstimate />
    </div>
  )
}

export default Sentiment
