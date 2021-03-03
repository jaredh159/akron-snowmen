import React from "react";
import { Meta } from "@storybook/react";
import BodyText from "../components/BodyText";

const storiesMeta: Meta = {
  title: `BodyText`,
  component: BodyText,
  parameters: {
    layout: "centered",
  },
};

export default storiesMeta;

export const Primary = () => (
  <div style={{ background: "var(--med-purple)", padding: "10px" }}>
    <BodyText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate atque
      ducimus dicta sed impedit cupiditate ut eligendi odit totam aut rem quod
      labore nisi nobis rerum itaque, cum voluptas esse.
    </BodyText>
  </div>
);
