import React from 'react';
import cx from 'classnames';
import styles from './styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li className={cx(styles.first, styles.items)}>
          © {new Date().getFullYear()} — All rights reserved.
        </li>
        <li className={cx(styles.second, styles.items)}>
          <a className={styles.link1} href="https://virtuosolanscapes.com">
            Virtuoso Landscaping
          </a>
        </li>
        <li className={cx(styles.third, styles.items)}>
          Website:
          <a className={styles.link2} href="https://homework.howtocomputer.link">
            HTC
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
