import React from "react";
import styles from "./styles.module.scss";

const CryptoCard = (props) => {
  const { name, small, symbol, price_btc, data } = props;
  const { price_change_percentage_24h, sparkline } = data;

  return (
    <div className={styles.cryptoCard}>
      <div className={styles.heading}>
        <img src={small} alt="icon" className={styles.icon} />

        <p className={styles.symbol}>{symbol}</p>
        <p
          className={`${styles.priceChange} ${
            price_change_percentage_24h.usd > 0 ? styles.profit : styles.loss
          }`}
        >
          {price_change_percentage_24h.usd.toFixed(2)}%
        </p>
      </div>
      <p className={styles.price}>{price_btc.toFixed(2)}</p>

      <img src={sparkline} alt="icon" className={styles.graph} />
    </div>
  );
};
const Footer = () => {
  const coinsInfo = [
    {
      item: {
        id: "usual",
        coin_id: 51091,
        name: "Usual",
        symbol: "USUAL",
        market_cap_rank: 286,
        thumb:
          "https://coin-images.coingecko.com/coins/images/51091/standard/USUAL.jpg?1730035787",
        small:
          "https://coin-images.coingecko.com/coins/images/51091/small/USUAL.jpg?1730035787",
        large:
          "https://coin-images.coingecko.com/coins/images/51091/large/USUAL.jpg?1730035787",
        slug: "usual",
        price_btc: 0.76006234406296450218,
        score: 4,
        data: {
          price: 0.5879226287160986,
          price_btc: "0.000006234406296450218",
          price_change_percentage_24h: {
            usd: -14.24236737908534,
          },
          sparkline: "https://www.coingecko.com/coins/51091/sparkline.svg",
        },
      },
    },
  ];
  return (
    <div className={styles.footerContainer}>
      <p className={styles.title}>You May Also Like</p>

      <div className={styles.cardContainer}>
        {coinsInfo.map((coin, i) => (
          <CryptoCard {...coin.item} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
