import React from "react";
import styles from "./Nav.module.css";

const Nav: React.FC = () => {
  return (
    <>
      <ul className={styles.outerNav}>
        <li className={styles.link}>WELCOME</li>
        <li className={styles.link}>WHO WE ARE</li>
        <li className={styles.link}>WHAT WE DO</li>
        <li className={styles.link}>GET IN TOUCH</li>
      </ul>
    </>
  );
};

export default Nav;
