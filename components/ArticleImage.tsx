import React from "react";
import styles from "./styles/ArticleImage.module.css";
import cx from "classnames";

type Props = {
  imageJPG: string;
  imageWebP: string;
  direction: "left" | "right";
  className?: string;
};

const Image: React.FC<Props> = ({
  imageJPG,
  imageWebP,
  direction,
  className = "",
}) => {
  return (
    <picture>
      <source type="image/webp" srcSet={imageWebP} />
      <img
        src={imageJPG}
        alt={Math.random().toString()}
        className={cx(`${styles[direction]} ${styles.main}`, className)}
      />
    </picture>
  );
};

export default Image;
