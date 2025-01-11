import React from "react";
import styles from "./styles.module.scss";
import ToolTipComponent from "../../commonComponents/ToolTipComponent";
import FixedProgressBar from "../../commonComponents/FixedProgressBar";
import InfoIcon from '@mui/icons-material/Info';
import { useScroll } from "../../utils/context/ScrollContext";

const Trend = (props) => {
  const { low, low_text, high, high_text, value, maxValue } = props;

  return (
    <div className={styles.trendBox}>
      <div className={styles.lowBox}>
        <p className={styles.text}>{low_text}</p>
        <p className={styles.values}>{low}</p>
      </div>
      <FixedProgressBar value={value} maxValue={maxValue} />
      <div className={styles.lowBox}>
        <p className={styles.text}>{high_text}</p>
        <p className={styles.values}>{high}</p>
      </div>
    </div>
  );
};

const StatCard = (props) => {
  const { label, value, change, date, timeframe } = props;

  return (
    <div className={styles.statCard}>
      <p className={styles.label}>{label}</p>

      <div className={styles.valueBox}>
        <p className={styles.value}>
          {value}

          {change ? (
            <span
              className={
                change.indexOf("+") !== -1 ? styles.profit : styles.loss
              }
            >
              {change}
            </span>
          ) : null}
        </p>
        {date ? (
          <p className={styles.dateSection}>{`${date} (${timeframe})`}</p>
        ) : null}
      </div>
    </div>
  );
};

const Performance = () => {
  const data = [
    {
      low: "46,930.22",
      low_text: "Today’s Low",
      high: "49,343.83",
      high_text: "Today’s High",
      value: 48637.83,
      maxValue: 100000
    },
    {
      low: "16,930.22",
      low_text: "52W Low",
      high: "49,743.83",
      high_text: "52W High",
      maxValue: 100000
    },
  ];
  const bitcoinStats = [
    { label: "Bitcoin Price", value: "$16,815.46" },
    { label: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
    { label: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
    { label: "Trading Volume", value: "$23,249,202,782" },
    { label: "Market Cap Rank", value: "#1" },
    { label: "Market Cap", value: "$323,507,290,047" },
    { label: "Market Cap Dominance", value: "38.343%" },
    { label: "Volume / Market Cap", value: "0.0718" },
    {
      label: "All-Time High",
      value: "$69,044.77",
      change: "-75.6%",
      date: "Nov 10, 2021",
      timeframe: "about 1 year",
    },
    {
      label: "All-Time Low",
      value: "$67.81",
      change: "+24729.1%",
      date: "Jul 06, 2013",
      timeframe: "over 9 years",
    },
  ];

  const { sectionRefs } = useScroll();

  return (
    <div className={styles.outerContainer}>
      <p className={styles.title}>Performance</p>

      <div className={styles.performanceDetailsBox}>
        {data.map((d, i) => (
          <Trend key={i} {...d} />
        ))}
      </div>

      <div className={styles.fundamentalContainer} ref={sectionRefs.Fundamentals}>
        <p className={`${styles.title} ${styles.fundamentalTitle}`}>
          Fundamentals <ToolTipComponent title="Fundamentals" children={<InfoIcon className={styles.infoicon}/>} className={styles.tooltipStyle}/>
        </p>

        <div className={styles.statsDetailsBox}>
          <div className={styles.statsBox}>
            {bitcoinStats.slice(0, 5).map((d, i) => (
              <StatCard key={i} {...d} />
            ))}
          </div>

          <div className={styles.statsBox}>
            {bitcoinStats.slice(5, bitcoinStats.length).map((d, i) => (
              <StatCard key={i} {...d} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
