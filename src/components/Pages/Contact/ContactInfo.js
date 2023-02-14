import React from "react";
import styles from "./ContactInfo.module.css";

const ContactInfo = ({ img, title, linkName, link }) => {
  return (
    <div className={`${styles.contact} column flex-align-centr`}>
      <div className={`${styles.greyCircle} column flex-centrXY`}>
        <img src={img} />
      </div>
      <h3>{title}</h3>
      {linkName && <a href={link}>{linkName}</a>}
    </div>
  );
};

export default ContactInfo;
