import React from "react";
import SectionName from "../../Global_UI_Comp/SectionName";
import styles from "./Portfolio.module.css";
import Project from "./Project";
import { projects } from "./ProjectsList";

const Portfolio = () => {
  return (
    <section>
      <SectionName name={"Projects"} />

      <div className={`${styles.projectsWrapper} container`}>
        {projects.map((project) => {
          return (
            <Project project={project} image={project.image} />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
