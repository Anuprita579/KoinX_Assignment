import React from 'react'
import styles from "./styles.module.scss"
import HomePath from './HomePath'
import StockGraph from './StockGraph'

const index = () => {
  return (
    <div className={styles.homePage}>
      <HomePath />
      <StockGraph />
      Home
    </div>
  )
}

export default index
