import React from "react";
import SectionName from "../../Global_UI_Comp/SectionName";
import styles from "./Portfolio.module.css";
import Project from "./Project";
import { projects } from "./ProjectsList";

const Portfolio = () => {
  return (
    <section className={`${styles.section}`} >
      <SectionName name={"Projects"} />

      <div className={`${styles.projectsWrapper} container`}>
        {projects.map((project, index) => {
          return (
            <Project key={index} project={project} image={project.image} index={index} />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
