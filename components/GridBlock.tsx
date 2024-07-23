import React from "react";
import styles from "./styles/GridBlock.module.css";
import cx from "classnames";

type Props = {
  title: string;
  paragraph: string;
  className: string;
  icon: string;
};

const GridBlock: React.FC<Props> = ({ title, className, icon }) => {
  return (
    <div
      className={cx(
        "flex items-center bg-white/10 pt-5 pr-7 pb-8 pl-8",
        className
      )}
    >
      <div className="pl-1">
        <div className="text-blue-800 w-10 h-10 bg-white text-lg rounded-full mt-[10px] flex justify-center items-center">
          <i aria-hidden="false" className={icon}></i>
        </div>
      </div>

      <div className="pl-6">
        <h2 className="m-0 pt-3 text-[1.4rem] font-normal text-white/80">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default GridBlock;
