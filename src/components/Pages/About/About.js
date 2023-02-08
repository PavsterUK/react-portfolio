import React from "react";
import SectionName from "../../Global_UI_Comp/SectionName";
import styles from "./About.module.css";
import BulbPic from "../../../img/bulb-icon.svg";
import MobileFriendlyPic from "../../../img/desktop-mobile-icon.svg";
import RocketPic from "../../../img/rocket-launch-line-icon.svg";
import SpeedoPic from "../../../img/speedometer-icon.svg";
import Bullet from "./Bullet";
import { skills } from "./SkillsList";
import Skill from "./Skill";

const About = () => {
  return (
    <section>
      <SectionName name={"About"} />
      <div className={styles.bulletsWrapper}>
        <Bullet
          img={BulbPic}
          title={"Intuitive"}
          description={
            "I always aim to create minimalistic, elegant and easy to use UI/UX."
          }
        />
        <Bullet
          img={MobileFriendlyPic}
          title={"Responsive"}
          description={
            "Responsive design approach means that my layouts will look perfect on any screen size."
          }
        />
        <Bullet
          img={RocketPic}
          title={"Fast"}
          description={
            "Smooth and seamless page loading, lag free websites is my priority"
          }
        />
        <Bullet
          img={SpeedoPic}
          title={"Dynamic"}
          description={
            "Dynamic websites promote a positive browsing experience and make people come back again."
          }
        />
      </div>
      <h1 className={`${styles.skillsSectionName} text-center`}>Skills</h1>
      <div className={styles.skillsWrapper}>
        {skills.map((skill) => {
          return <Skill skill={skill} />;
        })}
      </div>
    </section>
  );
};

export default About;
