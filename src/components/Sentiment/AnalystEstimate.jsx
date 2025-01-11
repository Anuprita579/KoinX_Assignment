import React from "react";
//Common Component
import ToolTipComponent from "../../commonComponents/ToolTipComponent";
//MUI Icons
import InfoIcon from "@mui/icons-material/Info";
import styles from "./styles.module.scss";

const AnalystEstimate = () => {
  return (
    <div className={styles.analystEstimate}>
      <p className={styles.subheading}>
        Analyst Estimates
        <ToolTipComponent
          title="Analyst Estimates"
          children={<InfoIcon className={styles.infoicon} />}
          className={styles.tooltipStyle}
        />
      </p>
      <div className={styles.analystEstimateContainer}>
        {/* Left Section */}
        <div className={styles.analysisPercentage}>
          76<span className={styles.percentIcon}>%</span>
        </div>
        {/* Right section */}
        <div className={styles.progressSection}>
          <p className={styles.buyStatus}>Buy</p>
          <div className={styles.buyStatusBox}>
            {" "}
            <div className={styles.buyPercent}></div>76%
          </div>
          <p className={styles.buyStatus}>Hold</p>
          <div className={styles.buyStatusBox}>
            {" "}
            <div className={styles.holdPercent}></div>8%
          </div>
          <p className={styles.buyStatus}>Sell</p>
          <div className={styles.buyStatusBox}>
            {" "}
            <div className={styles.sellPercent}></div>16%
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalystEstimate;
