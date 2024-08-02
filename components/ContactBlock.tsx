import React from "react";
import Form from "./Form";
import styles from "./styles/ContactBlock.module.css";
import BodyText from "./BodyText";
import cx from "classnames";

const ContactBlock: React.FC = () => {
  return (
    <div className={styles.entire} id="contact-us">
      <h2 className={styles.mainHeader}>Get In Touch</h2>
      <BodyText className={cx("!max-w-[950px]", styles.mainText)}>
        Would you like to speak with us about snow and ice removal for{" "}
        <em>your</em> property? Submit the form below for a free bid.
      </BodyText>
      <div className={styles.main}>
        <div className={styles.formWrapper}>
          <Form />
        </div>
        <div className={styles.line}></div>
        <div className={styles.info}>
          <div>
            <h1>Email</h1>
            {/* make sure to change where the form goes to... */}
            <a
              href="mailto:virtuoso.contracts@gmail.com"
              className={styles.email}
            >
              virtuoso.contracts@gmail.com
            </a>
          </div>
          <div>
            <h1>Phone</h1>
            <a href="tel:3304191527">(330) 419-1527</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
