import React from 'react';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  return (
    <ul className={styles.outerNav}>
      <li className={styles.link}>
        <a href="#heroBlock">Welcome</a>
      </li>
      <li className={styles.link}>
        <a href="#ImageBlock">Who We Are</a>
      </li>
      <li className={styles.link}>
        <a href="#pinkBlock">What We Do</a>
      </li>
      <li className={styles.link}>
        <a href="#contactBlock">Get In Touch</a>
      </li>
    </ul>
  );
};

export default Nav;
