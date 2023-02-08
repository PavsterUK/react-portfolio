import React from "react";
import styles from "./Bullet.module.css";

const Bullet = ({ img, title, description }) => {
  return (
    <div className={`${styles.bulletWrapper} column flex-centrXY text-center`}>
      <div className={`${styles.circle} column flex-centrXY`}>
        <img src={img} />
      </div>
      <h1 className={styles.bulletTitle}>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Bullet;
