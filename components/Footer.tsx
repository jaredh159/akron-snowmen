import React from 'react';
import cx from 'classnames';
import styles from './Footer.module.css';
import FooterLinks from './FooterLinks';

type Props = {
  className?: string;
};

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={cx(className, styles.linksInFooter)}>
      <FooterLinks whatLinkSays="Home" whereLinkGoes="https://friendslibrary.com" />
      <FooterLinks whatLinkSays="About Us" whereLinkGoes="https://friendslibrary.com" />
      <FooterLinks whatLinkSays="What we do" whereLinkGoes="https://friendslibrary.com" />
      <FooterLinks whatLinkSays="Staff" whereLinkGoes="https://friendslibrary.com" />
    </div>
  );
};

export default Footer;
