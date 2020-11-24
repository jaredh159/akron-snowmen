import React from 'react';
import styles from './Hamburger.module.css';

type Props = {
  closed: boolean;
  onClick: () => unknown;
};

const Hamburger: React.FC<Props> = ({ closed, onClick }) => {
  return (
    <div className={styles.main} onClick={onClick}>
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
