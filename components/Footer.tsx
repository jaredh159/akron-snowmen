import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.links}>
        <li className={styles.first}>© 2020 — All rights reserved.</li>
        <li className={styles.second}>
          <a href="https://virtuosolanscapes.com">Virtuoso Landscaping</a>
        </li>
        <li className={styles.third}>
          Website:{' '}
          <a className={styles.htc} href="https://homework.howtocomputer.link">
            HTC
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
