import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import styles from "./styles/Layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <Nav />
      </nav>
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
