import React from "react";
import cx from "classnames";

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
      className={cx(
        `Button`,
        "bg-white/0  text-white text-[11px] text-center tracking-[0.125rem] uppercase border border-solid border-white/30 rounded-full rounded-[30px]x py-[1.125rem] inline-block max-w-[450px] transition-colors duration-200 hover:bg-white/[0.07] hover:border-white/70 focus:outline-none",
        className
      )}
      style={{ width: width }}
    >
      {children}
      {` `}
    </a>
  );
};

export default Button;
