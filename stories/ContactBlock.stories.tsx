import React from "react";
import { Meta } from "@storybook/react";
import ContactBlock from "../components/ContactBlock";

const storiesMeta: Meta = {
  title: `ContactBlock`,
  component: ContactBlock,
  parameters: {
    layout: "fullscreen",
  },
};

export default storiesMeta;

export const Primary = () => <ContactBlock />;
