import React from "react";
import styles from "./HNav.module.css";
import HNavItem from "./HNavItem";

const HNav: React.FC = (): any => {
  return (
    <ul className={styles.HNav}>
      <HNavItem text="Testing" url="http://testing.com" />
    </ul>
  );
};

export default HNav;
