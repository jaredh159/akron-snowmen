import React from "react";

type Props = {
  text: string;
  url: string;
};

const HNavItem: React.FC<Props> = ({ text, url }): any => {
  return (
    <li>
      <a href={url}>{text}</a>
    </li>
  );
};

export default HNavItem;
