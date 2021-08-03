import React from 'react';
import styles from './styles/HeroBlock.module.css';
import Button from './Button';
import BodyText from './BodyText';

const HeroBlock: React.FC = () => {
  return (
    <div className={styles.entire} id="welcome">
      <img src="./plow.jpg" className={styles.image} alt="plow" />

      <div className={styles.overlay}>
        <h1>Akron Snowmen</h1>

        <BodyText>
          A full service ice and snow removal company locally owned and operated in
          Wadsworth, Ohio. We offer professional snow removal services to commercial,
          corporate, and industrial properties throughout Northeast Ohio. During all snow
          storms we are staffed 24 hours, providing complete peace-of-mind during every
          snow event.
        </BodyText>

        <div className={styles.button}>
          <Button href="#about-us" className={styles.heroBlockButton}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
