import React from 'react';
import styles from './HeroBlock.module.css';
import Button from './Button';

const HeroBlock: React.FC = () => {
  return (
    <div className={styles.entire}>
      <img
        src="https://snowmen-example.netlify.app/static/plow-f89df041675b6e6bf25171420a8f84fa.jpg"
        className={styles.image}
        alt="plow"
      />
      <div className={styles.overlay}>
        <h1>Akron Snowmen</h1>
        <p>
          Commercial snow plowing, snow removal, and ice removal, based in Wadsworth,
          Ohio.
        </p>
        <div className={styles.button}>
          <Button>LEARN MORE</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
