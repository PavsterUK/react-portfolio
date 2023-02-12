import React from "react";
import styles from "./ContactInfo.module.css";

const ContactInfo = ({ img, title, contactInfo }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.greyCircle}>
        <img src={img} />
      </div>
      <h3>{title}</h3>
      <a>{contactInfo}</a>
    </div>
  );
};

export default ContactInfo;
