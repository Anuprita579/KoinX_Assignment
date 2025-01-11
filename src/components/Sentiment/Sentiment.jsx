import React from 'react'
import KeyEvents from './KeyEvents'
import styles from "./styles.module.scss";

const Sentiment = () => {
  return (
    <div className={styles.sentiment}>
      <p className={styles.heading}>Sentiment</p>
      <KeyEvents />
    </div>
  )
}

export default Sentiment
