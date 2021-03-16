import React from 'react';
import styles from './HeroBlock.module.css';
import Button from './Button';
import BodyText from './BodyText';

const HeroBlock: React.FC = () => {
  return (
    <div className={styles.entire} id="welcome">
      <img src="./plow.jpg" className={styles.image} alt="plow" />

      <div className={styles.overlay}>
        <h1>Akron Snowmen</h1>

        <BodyText>
          {' '}
          Commercial snow plowing, shoveling, and salting, based in Wadsworth, Ohio.
        </BodyText>

        <div className={styles.button}>
          <Button className={styles.heroBlockButton}>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
