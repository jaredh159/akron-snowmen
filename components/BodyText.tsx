import React from "react";
import styles from "./BodyText.module.css";
import cx from "classnames";

type Props = {
  className?: string;
};

const BodyText: React.FC<Props> = ({ className, children }) => {
  return <div className={cx(styles.main, className)}>{children}</div>;
};

export default BodyText;
