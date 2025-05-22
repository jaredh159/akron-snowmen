import React from "react";
import styles from "./styles/SmallHero.module.css";
import BodyText from "./BodyText";

type Props = {
  imgPathJPG: string;
  imgPathWebP: string;
  title: string;
  text: string;
};

const SmallHero: React.FC<Props> = ({
  imgPathJPG,
  imgPathWebP,
  title,
  text,
}) => {
  return (
    <div className={styles.entire} id="heroBlock">
      <picture>
        <source type="image/webp" srcSet={imgPathWebP} />
        <img src={imgPathJPG} className={styles.image} alt="team" />
      </picture>

      <div className={styles.overlay}>
        <h1>{title}</h1>

        <BodyText>{text}</BodyText>
      </div>
    </div>
  );
};

export default SmallHero;
