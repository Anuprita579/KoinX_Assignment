import React from "react";
//Context
import { useScroll } from "../../utils/context/ScrollContext";
//Import
import DonutChart from "./DonutChart";
import styles from "./styles.module.scss";

const Tokenomics = () => {
  const { sectionRefs } = useScroll();
  return (
    <div className={styles.tokenomicsContainer} ref={sectionRefs.Tokenomics}>
      <p className={styles.heading}>Tokenomics</p>
      <p className={styles.title}>Initial Distribution</p>
      <DonutChart />
      <p className={styles.subText}>
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
};

export default Tokenomics;
