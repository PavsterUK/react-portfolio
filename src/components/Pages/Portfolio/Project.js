import React from "react";
import styles from "./Project.module.css";
import githubIcon from "../../../img/github-icon.svg";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Project = ({ project, image, index }) => {
  const handleClick = () => {
    window.open(project.page, "_blank");
  };

  return (
    <div
      style={{ animationDelay: `${index / 4}s` }}
      className={`${styles.projectWrapper} column flex-centrXY text-center`}
    >
      <img src={image} alt="..." />
      <div className={`${styles.projectInfo} column flex-align-centr`}>
        <h2>{project.title}</h2>
        <p>{project.descr}</p>
        <h4>Tech Stack:</h4>[
        {project.tools.map((tool) => {
          return ` ${tool}  `;
        })}
        ]
        <Link to={project.github}>
          <img className={styles.gitHubIcon} src={githubIcon} alt="..." />
        </Link>
        <Button className={styles.button} onClick={handleClick}>
          Have a Look!
        </Button>
      </div>
    </div>
  );
};

export default Project;
