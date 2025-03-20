import React from "react";
import styles from "./styles/ArticleImage.module.css";
import cx from "classnames";

type Props = {
  image: string;
  direction: "left" | "right";
  className?: string;
};

const Image: React.FC<Props> = ({ image, direction, className = "" }) => {
  return (
    <img
      src={image}
      alt={Math.random().toString()}
      className={cx(`${styles[direction]} ${styles.main}`, className)}
    />
  );
};

export default Image;
