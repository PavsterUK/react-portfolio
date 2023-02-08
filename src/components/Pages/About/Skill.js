import React from "react";
import styles from "./Skill.module.css";

const Skill = ({ skill }) => {
  return <div className={`${styles.skill} text-center`}>{skill}</div>;
};

export default Skill;
