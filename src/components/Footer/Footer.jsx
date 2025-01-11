import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
const Footer = ({trendingData, }) => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.title}>You May Also Like</p>

      <div className={styles.cardContainer}>
      <Swiper
        modules={[Navigation]}
        navigation
        className={styles.swiperContainer}
        slidesPerView={4} 
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {trendingData && trendingData.map((coin, i) => (
          <SwiperSlide key={i} className={styles.swiperSlide}>
          <CryptoCard {...coin.item} />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>

      <p className={styles.title}>Trending Coins</p>

      <div className={styles.cardContainer}>
      <Swiper
        modules={[Navigation]}
        navigation
        className={styles.swiperContainer}
        slidesPerView={4} 
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {trendingData && trendingData.map((coin, i) => (
          <SwiperSlide key={i} className={styles.swiperSlide}>
          <CryptoCard {...coin.item} />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Footer;