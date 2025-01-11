import React, { useEffect, useState } from "react";
//Axios
import axios from "axios";
//Common Components
import TabbedComponent from "../../commonComponents/TabbedComponent";
//Components
import HomePath from "./HomePath";
import StockGraph from "./StockGraph";
import Performance from "../../components/Performance/Performance";
import Footer from "../../components/Footer/Footer";
import TrendingCoins from "../../components/TrendingCoins/TrendingCoins";
import Sentiment from "../../components/Sentiment/Sentiment";
import GetStarted from "../../components/GetStarted/GetStarted";
import TeamInfo from "../../components/TeamInfo/TeamInfo";
import About from "../../components/About/About";
import Tokenomics from "../../components/Tokenomics/Tokenomics";
import styles from "./styles.module.scss";

const tabsList = [
  "Overview",
  "Fundamentals",
  "News Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];

const Home = () => {
  const [trendingData, setTrendingData] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  // console.log("apikey", process.env.REACT_APP_API);
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=${process.env.REACT_APP_API}`
      );
      if (response.data) {
        // console.log({ respdatatrending: response?.data?.coins });
        setTrendingData(response.data);
        setShowLoader(false);
      }
      setTrendingData(response?.data?.coins);
    } catch (err) {
      console.error(err);
      setShowLoader(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.homePage}>
      <div className={styles.mainPage}>
        <div className={styles.leftSection}>
          <HomePath />
          <StockGraph />
          <TabbedComponent tabsList={tabsList} />
          <Performance />
          <Sentiment />
          <About />
          <Tokenomics />
          <TeamInfo />
        </div>
        <div className={styles.rightSection}>
          <GetStarted />
          <TrendingCoins trendingData={trendingData} />
        </div>
      </div>
      <Footer trendingData={trendingData} />
    </div>
  );
};

export default Home;
