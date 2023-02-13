import React from "react";
import SectionName from "../../Global_UI_Comp/SectionName";
import styles from "./Contact.module.css";
import ContactInfo from "./ContactInfo";
import gitHubIcon from "../../../img/github-icon.svg";
import emailIcon from "../../../img/email-icon.svg";
import phoneIcon from "../../../img/phone-outline-icon.svg";
import linkedinIcon from "../../../img/linkedin-line-icon.svg";

const Contact = () => {
  return (
    <section className={`${styles.section} column `}>
      <SectionName name={"Contact"} />
      <h3 class={"text-center"}>Get in touch, let's make it happen!</h3>
      <div className={`${styles.contactsWrapper} container row `}>
        <ContactInfo
          title={"Email"}
          img={emailIcon}
          link={"mailto:pavelnaumovic@gmail.com"}
          linkName={"pavelnaumovic@gmail.com"}
        />
        <ContactInfo
          title={"Phone"}
          img={phoneIcon}
          link={"tel:+447593676793"}
          linkName={"+447593676793"}
        />
        <ContactInfo
          title={"LinkedIn"}
          img={linkedinIcon}
          link={"https://www.linkedin.com/in/pavel-naumovich-559342a1/"}
          linkName={"Go to"}
        />
        <ContactInfo
          title={"GitHub"}
          img={gitHubIcon}
          link={"https://github.com/PavsterUK"}
          linkName={"Go to"}
        />
      </div>
    </section>
  );
};

export default Contact;
