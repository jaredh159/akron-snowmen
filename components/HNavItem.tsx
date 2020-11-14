import React from "react";

type Props = {
  text: string;
  url: string;
};

const HNavItem: React.FC<Props> = ({ text, url }): any => {
  return (
    <>
      <h1>Text: {text} </h1>
      <h2>URL: {url} </h2>
    </>
  );
};

export default HNavItem;
