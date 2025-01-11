import React from "react";
import styles from "./styles.module.scss";
import HomePath from "./HomePath";
import StockGraph from "./StockGraph";
import TabbedComponent from "../../commonComponents/TabbedComponent";
import Performance from "../../components/Performance/Performance";
import Footer from "../../components/Footer/Footer";
import TrendingCoins from "../../components/TrendingCoins/TrendingCoins";
import Sentiment from "../../components/Sentiment/Sentiment";
import GetStarted from "../../components/GetStarted/GetStarted";
import TeamInfo from "../../components/TeamInfo/TeamInfo";

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
      <div className={styles.mainPage}>
        <div className={styles.leftSection}>
          <HomePath />
          <StockGraph />
          <TabbedComponent tabsList={tabsList} />
          <Performance />
          <Sentiment />
          <TeamInfo />
        </div>
        <div className={styles.rightSection}>
          <GetStarted />
          <TrendingCoins />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
