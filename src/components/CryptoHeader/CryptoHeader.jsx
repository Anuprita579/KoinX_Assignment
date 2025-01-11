import React from "react";
import styles from "./styles.module.scss";

const CryptoHeader = (props) => {
  const { name, small, data, symbol, showName = false } = props;
  const { price_change_percentage_24h } = data;

  return (
    <div className={styles.heading}>
      <div className={styles.nameSection}>
        <img src={small} alt="icon" className={styles.icon} />

        <p className={styles.symbol}>
          {showName ? `${name} (${symbol})` : symbol}
        </p>
      </div>
      <p
        className={`${styles.priceChange} ${
          price_change_percentage_24h.usd > 0 ? styles.profit : styles.loss
        }`}
      >
        {price_change_percentage_24h.usd.toFixed(2)}%
      </p>
    </div>
  );
};

export default CryptoHeader;
