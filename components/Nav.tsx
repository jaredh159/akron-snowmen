import React, { useState } from "react";
import styles from "./Nav.module.css";
import cx from "classnames";

const Nav: React.FC = () => {
  const [whoseActive, setWhoseActive] = useState<
    "heroBlock" | "ImageBlock" | "pinkBlock" | "contactBlock"
  >("heroBlock");

  return (
    <ul className={styles.outerNav}>
      <li
        className={cx(
          styles.link,
          whoseActive === "heroBlock" ? styles.active : ""
        )}
        onClick={() => setWhoseActive("heroBlock")}
      >
        <a href="#heroBlock">Welcome</a>
      </li>

      <li
        className={cx(
          styles.link,
          whoseActive === "ImageBlock" ? styles.active : ""
        )}
        onClick={() => setWhoseActive("ImageBlock")}
      >
        <a href="#ImageBlock">Who We Are</a>
      </li>

      <li
        className={cx(
          styles.link,
          whoseActive === "pinkBlock" ? styles.active : ""
        )}
        onClick={() => setWhoseActive("pinkBlock")}
      >
        <a href="#pinkBlock">What We Do</a>
      </li>

      <li
        className={cx(
          styles.link,
          whoseActive === "contactBlock" ? styles.active : ""
        )}
        onClick={() => setWhoseActive("contactBlock")}
      >
        <a href="#contactBlock">Get In Touch</a>
      </li>
    </ul>
  );
};

export default Nav;
