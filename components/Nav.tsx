import React, { useState, useEffect } from "react";
import styles from "./styles/Nav.module.css";
import cx from "classnames";
import NavItem from "./NavItem";

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
      <NavItem
        href="/#welcome"
        onClick={() => setActive("welcome")}
        text="Welcome"
        active={active === "welcome"}
      />

      <NavItem
        href="/our-team"
        onClick={() => setActive("team")}
        text="Our Team"
        active={active === "team"}
      />

      <NavItem
        href="/#our-services"
        onClick={() => setActive("services")}
        text="Our Services"
        active={active === "services"}
      />

      <NavItem
        href="/brine"
        onClick={() => setActive("brine")}
        text="Liquid Brine Treatments"
        active={active === "brine"}
      />

      <NavItem
        href="/clients"
        onClick={() => setActive("clients")}
        text="Our Clients"
        active={active === "clients"}
      />

      <NavItem
        href="/#contact-us"
        onClick={() => setActive("contact")}
        text="Contact Us"
        active={active === "contact"}
      />
    </ul>
  );
};

export default Nav;
