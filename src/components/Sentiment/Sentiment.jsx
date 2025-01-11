import React from 'react'
import KeyEvents from './KeyEvents'
import styles from "./styles.module.scss";
import AnalystEstimate from './AnalystEstimate';
import { useScroll } from '../../utils/context/ScrollContext';

const Sentiment = () => {
  const { sectionRefs } = useScroll();
  return (
    <div className={styles.sentiment} ref={sectionRefs.Sentiments}>
      <p className={styles.heading}>Sentiment</p>
      <KeyEvents />
      <AnalystEstimate />
    </div>
  )
}

export default Sentiment
