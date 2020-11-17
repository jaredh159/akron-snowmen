import React from 'react';
import styles from './Footer.module.css';
import FooterLinks from './FooterLinks';

const Footer: React.FC = (): any => {
  return (
    <div className={styles.linksInFooter}>
      <FooterLinks whatLinkSays="Home" whereLinkGoes="https://friendslibrary.com" />
      <FooterLinks whatLinkSays="About Us" whereLinkGoes="https://friendslibrary.com" />
      <FooterLinks whatLinkSays="What we do" whereLinkGoes="https://friendslibrary.com" />
      <FooterLinks whatLinkSays="Staff" whereLinkGoes="https://friendslibrary.com" />
    </div>
  );
};

export default Footer;
