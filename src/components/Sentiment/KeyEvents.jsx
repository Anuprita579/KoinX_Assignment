import React from "react";
import styles from "./styles.module.scss";
import ArticleIcon from "@mui/icons-material/Article";

const EventCard = () => {
  return (
    <div className={styles.eventCard}>
      {/* Left Section */}
      <div className={styles.logoContainer}>logo</div>
      {/* Right section */}
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
    <div>
      Key Events
      <EventCard />
    </div>
  );
};

export default KeyEvents;
