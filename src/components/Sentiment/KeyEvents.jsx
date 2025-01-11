import React from "react";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
//Common Components
import ToolTipComponent from "../../commonComponents/ToolTipComponent";
//MUI Icons
import ArticleIcon from "@mui/icons-material/Article";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import InfoIcon from "@mui/icons-material/Info";
import styles from "./styles.module.scss";

const EventCard = ({ icon, index }) => {
  const bgColor = ["#E8F4FD", "#EBF9F4"];
  const iconColor = ["#0082FF", "#0FBA83"];
  return (
    <div
      className={styles.eventCard}
      style={{ backgroundColor: bgColor[index % 2] }}
    >
      {/* Left Section */}
      <div
        className={styles.logoContainer}
        style={{ backgroundColor: iconColor[index % 2] }}
      >
        {icon}
      </div>
      {/* Right Section */}
      <div className={styles.eventContent}>
        <p className={styles.eventTitle}>
          Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis
          enim tincidunt.
        </p>
        <p className={styles.eventSubTitle}>
          Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
          faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.
          Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
          natoque lacinia libero enim.
        </p>
      </div>
    </div>
  );
};

const KeyEvents = () => {
  return (
    <div className={styles.keyEvents}>
      <p className={styles.subheading}>
        Key Events
        <ToolTipComponent
          title="Key Event"
          children={<InfoIcon className={styles.infoicon} />}
          className={styles.tooltipStyle}
        />
      </p>
      <Swiper
        modules={[Navigation]}
        navigation
        cssMode={true}
        className={styles.swiperContainer}
        slidesPerView={1}
        spaceBetween={20}
      >
        {/* Swiper Slides */}
        <SwiperSlide className={styles.swiperSlide}>
          <EventCard icon={<ArticleIcon />} index={0} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <EventCard icon={<TrendingUpIcon />} index={1} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <EventCard icon={<ArticleIcon />} index={2} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default KeyEvents;
