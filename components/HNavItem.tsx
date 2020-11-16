import React from "react";
import styles from "./HNavItem.module.css";

type Props = {
  text: string;
  url: string;
};

const HNavItem: React.FC<Props> = ({ text, url }): any => {
  return (
    <li className={styles.item}>
      <a href={url}>{text}</a>
    </li>
  );
};

export default HNavItem;
