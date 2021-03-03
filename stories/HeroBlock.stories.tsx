import React from 'react';
import { Meta } from '@storybook/react';
import HeroBlock from '../components/HeroBlock';

const storiesMeta: Meta = {
  title: `HeroBlock`,
  component: HeroBlock,
  parameters: {
    layout: 'fullscreen',
  },
};

export default storiesMeta;

export const HB = () => <HeroBlock />;
