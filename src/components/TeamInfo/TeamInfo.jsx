import React from "react";
import styles from "./styles.module.scss";
import profileImg1 from "../../assets/profile-img-1.png";
import profileImg2 from "../../assets/profile-img-2.png";
import profileImg3 from "../../assets/profile-img-3.png";
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
  const teamDetails = [
    {
      name: "John Smith",
      designation: "Designation here",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      name: "Elina Williams",
      designation: "Designation here",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      name: "John Smith",
      designation: "Designation here",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
  ];
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
