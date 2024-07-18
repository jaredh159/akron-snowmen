import React from "react";
import styles from "./styles/OurTeamHero.module.css";
import BodyText from "./BodyText";

const TeamHero: React.FC = () => {
  return (
    <div className={styles.entire} id="heroBlock">
      <img src="./brineTank.jpg" className={styles.image} alt="team" />

      <div className={styles.overlay}>
        <h1>Why make the switch from salt?</h1>

        <BodyText>
          We asked the same question. And after two years of research and
          testing on our own walkways and parking lots, we have a few answers.
        </BodyText>
      </div>
    </div>
  );
};

export default TeamHero;
