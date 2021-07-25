import React from 'react';
import Form from './Form';
import styles from './styles/ContactBlock.module.css';
import BodyText from './BodyText';

const ContactBlock: React.FC = () => {
  return (
    <div className={styles.entire} id="contact-us">
      <h2 className={styles.mainHeader}>Get in touch</h2>

      <BodyText className={styles.mainText}>
        Want to talk about <i>your</i> snow and ice removal? Submit the form below for a
        free bid.
      </BodyText>
      <div className={styles.main}>
        <div className={styles.formWrapper}>
          <Form />
        </div>
        <div className={styles.line}></div>
        <div className={styles.info}>
          <div>
            <h1>Address</h1>
            <p>
              2430 S. Medina Line
              <br />
              Wadsworth Oh, 44281
              <br />
              USA
            </p>
          </div>
          <div>
            <h1>Email</h1>
            <a href="mailto:virtuoso.rod@gmail.com" className={styles.email}>
              virtuoso.rod@gmail.com
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
