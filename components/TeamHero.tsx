import React from 'react';
import styles from './HeroBlock.module.css';
import Button from './Button';
import BodyText from './BodyText';

const TeamHero: React.FC = () => {
  return (
    <div className={styles.entire} id="heroBlock">
      <img src="./team.jpg" className={styles.image} alt="team" />

      <div className={styles.overlay}>
        <h1>Akron Snowmen</h1>

        <BodyText>
          {' '}
          Commercial snow plowing, shoveling, and salting, based here in Akron, Ohio.
        </BodyText>

        <div className={styles.button}>
          <Button className={styles.heroBlockButton}>LEARN MORE</Button>
        </div>
      </div>
    </div>
  );
};

export default TeamHero;
