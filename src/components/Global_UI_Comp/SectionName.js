import React from "react";
import styles from "./SectionName.module.css";

const SectionName = ({ name }) => {
  return (
    <div className={`col header d-flex flex-column align-items-center`}>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.bottomBorder}></div>
    </div>
  );
};

export default SectionName;
