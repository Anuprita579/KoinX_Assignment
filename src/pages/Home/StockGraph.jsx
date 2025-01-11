import React, { useEffect, useState } from "react";
import Logo from "../../assets/bitcoinLogo.png";
import ButtonComponent from "../../commonComponents/ButtonComponent";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import styles from "./styles.module.scss";
import axios from "axios";
import ChartComponent from "../../commonComponents/ChartComponent";

const stocks = {
  Bitcoin: {
    name: "Bitcoin",
    shortName: "BTC",
    rank: 1,
    price: 46953.04,
    perentage: 2.54,
    hours: 24,
    indianPrice: 3942343,
    logo: Logo,
  },
};

const StockGraph = () => {
  const [graph, setGraph] = useState(null);
  console.log(process.env.REACT_APP_API);
  console.log(process.env);
  const fetchGraphData = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true%27?x_cg_demo_api_key=${process.env.REACT_APP_API}`
      );
      if (response.data) {
        // console.log({ respdata: response.data?.bitcoin });
        setGraph(response.data.bitcoin);
      }
      // const responseObj = {
      //   inr: 8057078,
      //   usd: 93528,
      // };
      // setGraph(responseObj);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGraphData();
  }, []);
  return (
    <div className={styles.stockContainer}>
      <div className={styles.stockDetails}>
        <img
          src={stocks.Bitcoin.logo}
          alt="logo"
          className={styles.stockLogo}
        />
        <p className={styles.stockName}>{stocks.Bitcoin.name}</p>
        <p className={styles.stockShortName}>{stocks.Bitcoin.shortName}</p>
        <ButtonComponent
          children={"Rank#" + stocks.Bitcoin.rank}
          className={styles.stockRank}
        />
      </div>

      <div className={styles.priceDetails}>
        <div className={styles.usdPriceContainer}>
          <p className={styles.usdPrice}>
            ${" "}
            {graph &&
              graph?.usd.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
          </p>
          <p className={styles.percentangeChange}>
            <ArrowDropUpIcon /> 2.51%
          </p>
          <p className={styles.timeFormat}> (24H) </p>
        </div>

        <p className={styles.inrPrice}>
          &#8377;{" "}
          {graph &&
            graph?.inr.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
        </p>
      </div>

      <div className={styles.chartLegendContainer}>
        <div className={styles.chartLegend}>Bitcoin Price Chart (USD)</div>
        <div className={styles.chartDayOptions}>
          <div className={styles.chartDayOptionsButton}>1H</div>
          <div className={styles.chartDayOptionsButton}>24H</div>
          <div className={styles.chartDayOptionsButtonActive}>7D</div>
          <div className={styles.chartDayOptionsButton}>1M</div>
          <div className={styles.chartDayOptionsButton}>3M</div>
          <div className={styles.chartDayOptionsButton}>6M</div>
          <div className={styles.chartDayOptionsButton}>1Y</div>
          <div className={styles.chartDayOptionsButton}>All</div>
        </div>
      </div>

      <div className={styles.chart}>
        <ChartComponent />
      </div>
    </div>
  );
};

export default StockGraph;
