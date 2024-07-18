import React from "react";
import styles from "./styles/BrineGridBlock.module.css";
import cx from "classnames";
import BodyText from "./BodyText";

type Props = {
  title: string;
  paragraph: string;
  className: string;
  icon: string;
};

const BrineGridBlock: React.FC<Props> = ({
  title,
  className,
  icon,
  paragraph,
}) => {
  return (
    <div className={cx(styles.entireBlock, className)}>
      <div className={styles.leftChunk}>
        <div className={styles.icon}>
          <i aria-hidden="false" className={icon}></i>
        </div>
      </div>
      <div className={styles.rightChunk}>
        <h2>{title}</h2>
        <BodyText>{paragraph}</BodyText>
      </div>
    </div>
  );
};

export default BrineGridBlock;
