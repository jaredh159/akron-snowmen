import React from "react";
import styles from "./Button.module.css";
import cx from "classnames";

type Props = {
  className?: string;
  width?: string; // because that way you can pick the unit
};

const Button: React.FC<Props> = ({ className, width, children }) => {
  return (
    <button className={cx(styles.btn, className)} style={{ width: width }}>
      {children}{" "}
    </button>
  );
};

export default Button;
