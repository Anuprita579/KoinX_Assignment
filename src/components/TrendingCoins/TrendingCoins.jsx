import React from "react";
import styles from "./styles.module.scss";
import CryptoHeader from "../CryptoHeader/CryptoHeader";

const TrendingCoins = ({trendingData}) => {
  

  return (
    <div className={styles.trendingCoinsBox}>
      <p className={styles.heading}>Trending Coins (24h)</p>
      <div className={styles.coinsContainer}>
        {trendingData && trendingData.slice(0,3).map((coin, i) => (
          <CryptoHeader key={i} {...{ ...coin.item, showName: true }} />
        ))}
      </div>
    </div>
  );
};
export default TrendingCoins;
