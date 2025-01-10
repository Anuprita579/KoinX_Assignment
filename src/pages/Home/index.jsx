import React from "react";
import styles from "./styles.module.scss";
import HomePath from "./HomePath";
import StockGraph from "./StockGraph";
import TabbedComponent from "../../commonComponents/TabbedComponent";
import Performance from "../../components/Performance/Performance";
import Footer from "../../components/Footer/Footer";

const tabsList = [
  "Overview",
  "Fundamentals",
  "News Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];

const index = () => {
  return (
    <div className={styles.homePage}>
      <HomePath />
      <StockGraph />
      <TabbedComponent tabsList={tabsList} />
      <Performance />
      <Footer />
    </div>
  );
};

export default index;
