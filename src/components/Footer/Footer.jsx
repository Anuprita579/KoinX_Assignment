import React from "react";
import styles from "./styles.module.scss";
import CryptoHeader from "../CryptoHeader/CryptoHeader";

const CryptoCard = (props) => {
  const { price_btc, data } = props;
  const { sparkline } = data;

  return (
    <div className={styles.cryptoCard}>
      <CryptoHeader {...props} />

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