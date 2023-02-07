import React from "react";
import styles from "./SectionName.module.css";

const SectionName = ({ sectionName }) => {
  return (
    <div className={`col header d-flex flex-column align-items-center`}>
      <h1 className={styles.name}>{sectionName}</h1>
      <div className={styles.bottomBorder}></div>
    </div>
  );
};

export default SectionName;
