import React from "react";
import cx from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const BodyText: React.FC<Props> = ({ className, children }) => {
  return (
    <p className={cx("text-text-white max-w-[900px] leading-150", className)}>
      {children}
    </p>
  );
};

export default BodyText;
