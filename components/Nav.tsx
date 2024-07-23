import React, { useState, useEffect } from "react";
import styles from "./styles/Nav.module.css";
import cx from "classnames";

const Nav: React.FC = () => {
  const [active, setActive] = useState<
    "welcome" | "team" | "services" | "contact" | "clients" | "brine"
  >("welcome");

  useEffect(() => {
    if (window.location.href.includes(`our-team`)) {
      setActive(`team`);
    } else if (window.location.href.includes(`clients`)) {
      setActive(`clients`);
    } else if (window.location.href.includes(`brine`)) {
      setActive("brine");
    } else {
      switch (window.location.hash) {
        case "#our-services":
          setActive(`services`);
          break;
        case "#welcome":
          setActive(`welcome`);
          break;
        case "#contact-us":
          setActive(`contact`);
          break;
      }
    }
  }, []);

  return (
    // <ul className={styles.outerNav}>
    <ul className="bg-purple-dark flex justify-around items-center text-center lg:flex-col lg:justify-center">
      <li
        // very confusing. doesn't look right
        // className={cx(styles.link, active === "welcome" ? styles.active : "")}
        className={cx(
          "mx-[12px] tracking-[1px] text-[9px] text-white/50 uppercase font-bold relative h-[50px] flex items-center hover:text-white",
          // media query
          "lg:pt-[15px] lg:pb-[15px] lg:pr-[15px] lg:m-0 lg:text-right lg:w-[80%] lg:h-[60px] lg:text-[12px]",
          // styles for the after
          'lg:after:content-[""] lg:after:block lg:after:bg-white/[0.05] lg:after:absolute lg:after:h-[3px] lg:after:w-full lg:after:bottom-0',
          // active === "welcome" ? styles.active : ""
          active === "welcome"
            ? 'after:content-[""] after:block after:absolute after:bg-pink after:h-[3px] after:w-full after:bottom-0 lg:after:bg-gradient-to-l lg:after:from-pink lg:after:to-purple-medium'
            : ""
        )}
        onClick={() => setActive("welcome")}
      >
        <a href="/#welcome" className={styles.aTag}>
          Welcome
        </a>
      </li>

      <li
        className={cx(styles.link, active === "team" ? styles.active : "")}
        onClick={() => setActive("team")}
      >
        <a href="/our-team" className={styles.aTag}>
          Our Team
        </a>
      </li>

      <li
        className={cx(
          `OurServices`,
          styles.link,
          active === "services" ? styles.active : ""
        )}
        onClick={() => setActive("services")}
      >
        <a href="/#our-services" className={styles.aTag}>
          Our Services
        </a>
      </li>

      <li
        className={cx(styles.link, active === "brine" ? styles.active : "")}
        onClick={() => setActive("brine")}
      >
        <a href="/brine" className={styles.aTag}>
          Liquid Brine Treatments
        </a>
      </li>

      <li
        className={cx(styles.link, active === "clients" ? styles.active : "")}
        onClick={() => setActive("clients")}
      >
        <a href="/clients" className={styles.aTag}>
          Our Clients
        </a>
      </li>

      <li
        className={cx(styles.link, active === "contact" ? styles.active : "")}
        onClick={() => setActive("contact")}
      >
        <a href="/#contact-us" className={styles.aTag}>
          Contact Us
        </a>
      </li>
    </ul>
  );
};

export default Nav;
