import React from "react";
import { Meta } from "@storybook/react";
import HNav from "../components/HNav";

const storiesMeta: Meta = {
  title: `HNav`,
  component: HNav,
};

export default storiesMeta;

export const Primary = () => {
  return <HNav />;
};
