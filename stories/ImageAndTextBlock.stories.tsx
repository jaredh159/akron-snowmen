import React from 'react';
import { Meta } from '@storybook/react';
import ImageAndTextBlock from '../components/ImageAndTextBlock';

const storiesMeta: Meta = {
  title: `ImageAndTextBlock`,
  component: ImageAndTextBlock,
  parameters: {
    layout: 'fullscreen',
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
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, explicabo sed
      temporibus libero similique sint quaerat quas autem culpa dolorem voluptatum quis
      inventore molestiae eaque id minima consectetur dignissimos! Harum?
    </ImageAndTextBlock>
    <ImageAndTextBlock
      bgColor="rgb(68,67,160)"
      headerText="Feugiat consequat"
      bgImage="/sunset.jpg"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, explicabo sed
      temporibus libero similique sint quaerat quas autem culpa dolorem voluptatum quis
      inventore molestiae eaque id minima consectetur dignissimos! Harum?
    </ImageAndTextBlock>
    <ImageAndTextBlock
      bgColor="rgb(65,64,152)"
      headerText="Ultricies aliqua"
      bgImage="/traffic.jpg"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, explicabo sed
      temporibus libero similique sint quaerat quas autem culpa dolorem voluptatum quis
      inventore molestiae eaque id minima consectetur dignissimos! Harum?
    </ImageAndTextBlock>
  </>
);
