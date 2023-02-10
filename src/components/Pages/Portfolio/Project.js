import React from "react";
import styles from "./Project.module.css";
import githubIcon from "../../../img/github-icon.svg";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Project = ({ project, image }) => {
  return (
    <div className={`${styles.projectWrapper} column flex-centrXY text-center`}>
      <img src={image} alt="..." />
      <div className={`${styles.projectInfo} column`}>
        <h2 >{project.title}</h2>
        <p >{project.descr}</p>
        <Link to={project.page}>
          <Button href={project.page}>Have a Look!</Button>
        </Link>
        <h4>Tech Stack:</h4>[
        {project.tools.map((tool) => {
          return ` ${tool}  `;
        })}
        ]
        <Link to={project.github}>
          <img className={styles.gitHubIcon} src={githubIcon} alt="..." />
        </Link>
      </div>
    </div>
  );
};

export default Project;
