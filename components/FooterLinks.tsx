import React from 'react';
import styles from './Footer.module.css';

type Props = {
  whatLinkSays: string;
  whereLinkGoes: string;
};

const FooterLinks: React.FC<Props> = ({ whatLinkSays, whereLinkGoes }): any => {
  return (
    <div className={styles.mainDivForFooter}>
      <a href={whereLinkGoes}>{whatLinkSays}</a>
    </div>
  );
};

export default FooterLinks;
