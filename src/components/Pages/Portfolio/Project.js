import React from "react";
import styles from "./Project.module.css";


const Project = ({ project, imageUri }) => {
  return (
    <div className={`${styles.projectWrapper} column flex-centrXY text-center`}>
      <img src={imageUri} alt="..." />
      <div>
        <h5 className="card-title">Simple Static Website</h5>
        <p className="card-text">
          This is a example of a simple website laid out using legacy technology
          like: floats etc.
        </p>
        <a
          href="https://pavsteruk.github.io/challenge_01/"
          className="btn btn-primary"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default Project;
