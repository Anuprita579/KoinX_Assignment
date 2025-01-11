import React from "react";
import styles from "./styles.module.scss";
import profileImg1 from "../../assets/profile-img-1.png";
import profileImg2 from "../../assets/profile-img-2.png";
import profileImg3 from "../../assets/profile-img-3.png";
import { teamDetails } from "../../utils/constant/constant";
import { useScroll } from "../../utils/context/ScrollContext";

const imageMapping = {
  0: profileImg1,
  1: profileImg2,
  2: profileImg3,
};

const TeamCard = (props) => {
  const { name, designation, description, index } = props;

  return (
    <div className={styles.teamCard}>
      <div className={styles.leftSection}>
        <img
          src={imageMapping[index]}
          alt="profile"
          className={styles.profileImg}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.designation}>{designation}</p>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

const TeamInfo = () => {
  const { sectionRefs } = useScroll();

  return (
    <div className={styles.teamsContainer} ref={sectionRefs.Team}>
      <p className={styles.heading}>Team</p>
      <p className={styles.subText}>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      {teamDetails.map((team, index) => (
        <TeamCard key={index} {...{ ...team, index }} />
      ))}
    </div>
  );
};

export default TeamInfo;
