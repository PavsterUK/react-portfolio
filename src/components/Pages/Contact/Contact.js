import React from "react";
import SectionName from "../../Global_UI_Comp/SectionName";
import styles from "./Contact.module.css";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section className={`${styles.section} column flex-align-centr`}>
      <SectionName name={"Contact"} />
      <h3 class={"text-center"} >Get in touch, let's make it happen!</h3>
      <div className={`${styles.contactsWrapper} container row `}>
        <ContactInfo title={"Email"} />
        <ContactInfo title={"Phone"} />
        <ContactInfo title={"LinkedIn"} />
        <ContactInfo title={"GitHub"} />
      </div>
    </section>
  );
};

export default Contact;
