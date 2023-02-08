import React from "react";
import SectionName from "../../Global_UI_Comp/SectionName";
import styles from "./Portfolio.module.css";
import Project from "./Project";

const Portfolio = () => {
  return (
    <section>
      <SectionName name={"Projects"} />
      <div className={styles.projectsWrapper}>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Portfolio;
