import React from "react";
import { Meta } from "@storybook/react";
import ImageAndTextBlock from "../components/ImageAndTextBlock";

const storiesMeta: Meta = {
  title: `ImageAndTextBlock`,
  component: ImageAndTextBlock,
  parameters: {
    layout: "fullscreen",
  },
};

export default storiesMeta;

export const BasicStory = () => (
  <>
    <ImageAndTextBlock
      bgColor="rgb(72,71,169)"
      headerText="Sed Ipsum Dolor"
      bgImage="/clouds.jpg"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, explicabo
      sed temporibus libero similique sint quaerat quas autem culpa dolorem
      voluptatum quis inventore molestiae eaque id minima consectetur
      dignissimos! Harum?
    </ImageAndTextBlock>
    <ImageAndTextBlock
      bgColor="rgb(68,67,160)"
      headerText="Feugiat consequat"
      bgImage="/sunset.jpg"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, explicabo
      sed temporibus libero similique sint quaerat quas autem culpa dolorem
      voluptatum quis inventore molestiae eaque id minima consectetur
      dignissimos! Harum?
    </ImageAndTextBlock>
    <ImageAndTextBlock
      bgColor="rgb(65,64,152)"
      headerText="Ultricies aliqua"
      bgImage="/traffic.jpg"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, explicabo
      sed temporibus libero similique sint quaerat quas autem culpa dolorem
      voluptatum quis inventore molestiae eaque id minima consectetur
      dignissimos! Harum?
    </ImageAndTextBlock>
  </>
);

export const TeamMember = () => {
  return (
    <ImageAndTextBlock
      bgColor="rgb(72,71,169)"
      headerText="Josué Rodriguez"
      bgImage="/josue2.jpg"
      buttonShown={false}
    >
      Josue hates stretching, and has never seen the point in voluntarily
      exercising. At 37 he still gets a kick out of sledding once a storm is
      over.
    </ImageAndTextBlock>
  );
};

export const JosueLeft = () => {
  return (
    <ImageAndTextBlock
      bgColor="rgb(72,71,169)"
      headerText="Josué Rodriguez"
      bgImage="/josue2.jpg"
      buttonShown={false}
    >
      Josue hates stretching, and has never seen the point in voluntarily
      exercising. At 37 he still gets a kick out of sledding once a storm is
      over.
    </ImageAndTextBlock>
  );
};

export const JosueRight = () => {
  return (
    <ImageAndTextBlock
      bgColor="rgb(72,71,169)"
      headerText="Josué Rodriguez"
      bgImage="/josue2.jpg"
      buttonShown={false}
      right={true}
    >
      Josue hates stretching, and has never seen the point in voluntarily
      exercising. At 37 he still gets a kick out of sledding once a storm is
      over.
    </ImageAndTextBlock>
  );
};
