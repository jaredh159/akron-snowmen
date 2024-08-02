import React from "react";
import cx from "classnames";

type Props = {
  href: string;
  text: string;
  active: boolean;
  onClick: () => void;
};

const NavItem: React.FC<Props> = ({ href, onClick, text, active }) => {
  return (
    <li
      className={cx(
        "mx-[12px] tracking-[1px] text-[9px] text-white/50 uppercase font-bold relative h-[50px] flex items-center hover:text-white",
        // media query
        "lg:pt-[15px] lg:pb-[15px] lg:pr-[15px] lg:m-0 lg:text-right lg:w-[80%] lg:h-[60px] lg:text-[12px]",
        // styles for the after
        'lg:after:content-[""] lg:after:block lg:after:bg-white/[0.05] lg:after:absolute lg:after:h-[3px] lg:after:w-full lg:after:bottom-0',
        // active state
        active
          ? 'after:content-[""] after:block after:absolute after:bg-pink after:h-[3px] after:w-full after:bottom-0 lg:after:bg-gradient-to-l lg:after:from-pink lg:after:to-purple-medium'
          : ""
      )}
      onClick={onClick}
    >
      <a href={href} className="h-[50px] w-full pt-[30px] pb-[20px] px-0">
        {text}
      </a>
    </li>
  );
};

export default NavItem;
