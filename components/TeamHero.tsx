import React from 'react';
import styles from './styles/HeroBlock.module.css';
import BodyText from './BodyText';

const TeamHero: React.FC = () => {
  return (
    <div className={styles.entire} id="heroBlock">
      <img src="./team.jpg" className={styles.image} alt="team" />

      <div className={styles.overlay}>
        <h1>Our Team</h1>

        <BodyText>
          Akron Snowmen wouldn't be where it is today if it weren't for our dedicated and
          herd-working crew. Our team is out before, during, and after the storm to ensure
          your property remains clear and safe.
        </BodyText>
      </div>
    </div>
  );
};

export default TeamHero;
