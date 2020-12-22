import React from "react";
import { Meta } from "@storybook/react";
import Image from "../components/Image";

const storiesMeta: Meta = {
  title: `Image`,
  component: Image,
  parameters: {
    layout: "fullscreen",
  },
};

export default storiesMeta;

export const Image1 = () => (
  <>
    <Image
      bgColor="rgb(72,71,169)"
      headerText="Sed Ipsum Dolor"
      bgImage="http://jared.howtocomputer.link/img/pillars.jpg"
    />
    <Image
      bgColor="rgb(68,67,160)"
      headerText="Feugiat consequat"
      bgImage="http://jared.howtocomputer.link/img/pillars.jpg"
    />
    <Image
      bgColor="rgb(65,64,152)"
      headerText="Ultricies aliqua"
      bgImage="http://jared.howtocomputer.link/img/pillars.jpg"
    />
  </>
);
