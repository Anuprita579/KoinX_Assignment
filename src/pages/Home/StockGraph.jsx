import React, { useEffect } from "react";
import Logo from "../../assets/bitcoinLogo.png";
import ButtonComponent from "../../commonComponents/ButtonComponent";
import styles from "./styles.module.scss";
import axios from "axios";
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

const fetchGraphData = async () => {
  //   const response = await axios.get(
  //     "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true%27?x_cg_demo_api_key=CG-JLUiV4oYV3siBiSKEV4HEZ9h"
  //   );
  //   if (response.data) {
  console.log({ respdata: response.data });
  const responseObj = {
    inr: 8057078,
    usd: 93528,
  };
  setGraph(responseObj);
  // setGraph(response.data);
  //   }
};

const StockGraph = () => {
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
        <ButtonComponent children={"Rank#" + stocks.Bitcoin.rank} />
      </div>
    </div>
  );
};

export default StockGraph;
