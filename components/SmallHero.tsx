import React from "react";
import styles from "./styles/SmallHero.module.css";
import BodyText from "./BodyText";

type Props = {
  imgPath: string;
  title: string;
  text: string;
};

const SmallHero: React.FC<Props> = ({ imgPath, title, text }) => {
  return (
    <div className={styles.entire} id="heroBlock">
      <img src={imgPath} className={styles.image} alt="team" />

      <div className={styles.overlay}>
        <h1>{title}</h1>

        <BodyText>{text}</BodyText>
      </div>
    </div>
  );
};

export default SmallHero;
