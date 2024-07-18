import React from "react";
import cx from "classnames";
import styles from "./styles/Button.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  width?: string;
  href?: string;
};

const Button: React.FC<Props> = ({ href, className, width, children }) => {
  return (
    <a
      {...(href ? { href } : {})}
      className={cx(`Button`, styles.btn, className)}
      style={{ width: width }}
    >
      {children}
      {` `}
    </a>
  );
};

export default Button;
