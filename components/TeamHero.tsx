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
          Our team of shovelers and salters is out during every storm keeping your
          property clean and snow-free.
        </BodyText>
      </div>
    </div>
  );
};

export default TeamHero;
