import React, { Fragment } from "react";
import styles from "./styles.module.scss";

import aboutImg1 from "../../assets/about-img-1.png";
import aboutImg2 from "../../assets/about-img-2.png";
import { aboutDetails } from "../../utils/constant/constant";
import ButtonComponent from "../../commonComponents/ButtonComponent";

const imageMapping = {
  0: aboutImg1,
  1: aboutImg2,
};

const AboutCard = (props) => {
  const { title, description, cards, index } = props;
  console.log({ index });

  return (
    <div className={styles.aboutCard}>
      <p className={styles.title}>{title}</p>
      {cards ? (
        <>
          <div className={styles.cardsContainer}>
            {cards.map((card, i) => (
              <div
                key={i}
                className={`${styles.upsellingCard} ${
                  index % 2 === 1 ? styles.orangeBkg : ""
                }`}
              >
                <img
                  src={imageMapping[i]}
                  alt="about"
                  className={styles.aboutImg}
                />

                <div className={styles.rightSection}>
                  <p className={styles.cardTitle}>{card.title}</p>
                  <ButtonComponent children={card.cta} className={styles.cta} />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.divider} />
        </>
      ) : null}
      <p className={styles.description}>{description}</p>

      {cards ? null : <div className={styles.divider} />}
    </div>
  );
};

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <p className={styles.heading}>About Bitcoin</p>
      {aboutDetails &&
        aboutDetails.map((data, index) => (
          <AboutCard key={index} {...{ ...data, index }} />
        ))}
    </div>
  );
};

export default About;
