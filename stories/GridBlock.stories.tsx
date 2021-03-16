import React from 'react';
import { Meta } from '@storybook/react';
import GridBlock from '../components/GridBlock';

const storiesMeta: Meta = {
  title: `GridBlock`,
  component: GridBlock,
};

export default storiesMeta;

export const Mobile = () => (
  <GridBlock
    title="Lorem ipsum amet"
    paragraph="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
    className="foo"
    icon="fas fa-code"
  />
);
