import React, { useState } from "react";
import styles from "./Nav.module.css";
import cx from "classnames";

const Nav: React.FC = () => {
  const [whoseActive, setWhoseActive] = useState<
    "welcome" | "about" | "services" | "contact"
  >("welcome");

  return (
    <ul className={styles.outerNav}>
      <li
        className={cx(
          styles.link,
          whoseActive === "welcome" ? styles.active : ""
        )}
        onClick={() => setWhoseActive("welcome")}
      >
        <a href="#heroBlock" className={styles.aTag}>
          Welcome
        </a>
      </li>

      <li
        className={cx(
          styles.link,
          whoseActive === "about" ? styles.active : ""
        )}
        onClick={() => setWhoseActive("about")}
      >
        <a href="#ImageBlock" className={styles.aTag}>
          About us
        </a>
      </li>
      <li
        className={cx(
          styles.link,
          whoseActive === "services" ? styles.active : ""
        )}
        onClick={() => setWhoseActive("services")}
      >
        <a href="#pinkBlock" className={styles.aTag}>
          Our Services
        </a>
      </li>

      <li
        className={cx(
          styles.link,
          whoseActive === "contact" ? styles.active : ""
        )}
        onClick={() => setWhoseActive("contact")}
      >
        <a href="#contactBlock" className={styles.aTag}>
          Contact Us
        </a>
      </li>
    </ul>
  );
};

export default Nav;
