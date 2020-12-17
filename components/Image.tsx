import React from "react";
import styles from "./Image.module.css";

type Props = {
  bgColor: string;
  headerText: string;
  bgImage: string;
};

const Image: React.FC<Props> = ({ bgColor, headerText, bgImage }) => {
  return (
    <div className={styles.main}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className={styles.textBlock} style={{ backgroundColor: bgColor }}>
        <h1 className={styles.header}>{headerText}</h1>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, alias
          dolore. Architecto ipsam corporis libero est soluta ipsum culpa quas
          ipsa neque, possimus nulla odio esse itaque aspernatur quos
          exercitationem!
        </div>
        <div className={styles.fakeButton}>LEARN MORE</div>
      </div>
    </div>
  );
};

export default Image;
