import React from 'react';
import Form from './Form';
import styles from './styles/ContactBlock.module.css';
import BodyText from './BodyText';

const ContactBlock: React.FC = () => {
  const showStormHelper = true;
  return (
    <div className={styles.entire} id="contact-us">
      <h2 className={styles.mainHeader}>Get In Touch</h2>
      <BodyText className={styles.mainText}>
        Would you like to speak with us about snow and ice removal for <em>your</em>{' '}
        property? Submit the form below for a free bid.
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
            <a href="mailto:info@akronsnowmen.com" className={styles.email}>
              info@akronsnowmen.com
            </a>
          </div>
          <div>
            <h1>Phone</h1>
            <a href="tel:3304191527">(330) 419-1527{showStormHelper && <sup>*</sup>}</a>
            {showStormHelper && (
              <p className="text-white mt-3 italic  antialiased" style={{ fontSize: 12 }}>
                <sup>*</sup> Akron Snowmen only works with commercial clients, no
                exceptions. We{' '}
                <b className="underline">
                  do not plow or shovel driveways or walkways for homeowners.
                </b>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
