import React from 'react';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  return (
    <ul className={styles.outerNav}>
      <li className={styles.link}>Welcome</li>
      <li className={styles.link}>Who We Are</li>
      <li className={styles.link}>What We Do</li>
      <li className={styles.link}>Get In Touch</li>
    </ul>
  );
};

export default Nav;
