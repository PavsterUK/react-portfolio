import React from "react";
import SectionName from "../../Global_UI_Comp/SectionName";
import styles from "./About.module.css";
import BulbPic from "../../../img/bulb-icon.svg";
import Bullet from "./Bullet";

const About = () => {
  return (
    <section>
      <SectionName sectionName={"ABOUT"} />
      <Bullet
        img={BulbPic}
        title={"Intuitive"}
        description={
          "Smooth and seamless page loading, lag free websites is my priority."
        }
      />
    </section>
  );
};

export default About;
