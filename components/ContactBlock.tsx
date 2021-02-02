import React from 'react';
import Form from './Form';
import styles from './ContactBlock.module.css';

const ContactBlock: React.FC = () => {
  return (
    <div className={styles.entire}>
      <h3 className={styles.mainHeader}>Get in touch</h3>
      <p className={styles.mainText}>
        three fishers went sailing out into the west out into the west as the sun went
        down and each thought of the woman that loved him the best and the children stood
        watching them out on the town
      </p>

      <div className={styles.main}>
        <div className={styles.formWrapper}>
          <Form />
        </div>
        <div className={styles.line}></div>
        <div className={styles.info}>
          <div>
            <h1>Address</h1>
            <p>
              123 Dina Line
              <br />
              Wadsworth Oh, 44281
              <br />
              USA
            </p>
          </div>

          <div>
            <h1>Email</h1>
            <a href="mailto:rod@akronsnowmen.com" className={styles.rodEmail}>
              rod@akronsnowmen.com
            </a>
          </div>

          <div>
            <h1>Phone</h1>
            <a href="tel:5555551234">(555) 555-1234</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;