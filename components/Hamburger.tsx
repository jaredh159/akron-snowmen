import React from "react";
import styles from "./Hamburger.module.css";

type Props = {
  closed: boolean;
};

const Hamburger: React.FC<Props> = ({ closed }) => {
  return (
    <div className={styles.main}>
      <div className={styles.mainInner}>
        {closed ? (
          <>
            <div className={`${styles.top} ${styles.hamburgerChild}`}></div>
            <div className={`${styles.center} ${styles.hamburgerChild}`}></div>
            <div className={`${styles.bottom} ${styles.hamburgerChild}`}></div>
          </>
        ) : (
          <>
            <div className={styles.x}>X</div>
            {/* <div className={`${styles.x1} ${styles.x}`}></div>
            <div className={`${styles.x2} ${styles.x}`}></div> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Hamburger;
