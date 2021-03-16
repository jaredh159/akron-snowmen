import React from 'react';
import cx from 'classnames';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const now = new Date();
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li className={cx(styles.first, styles.items)}>
          © {now.getFullYear()} — All rights reserved.
        </li>
        <li className={cx(styles.second, styles.items)}>
          <a className={styles.virtuoso} href="https://virtuosolanscapes.com">
            Virtuoso Landscaping
          </a>
        </li>
        <li className={cx(styles.third, styles.items)}>
          Website:{' '}
          <a className={styles.htc} href="https://homework.howtocomputer.link">
            HTC
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
