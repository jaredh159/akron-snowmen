import React from 'react';
import { Meta } from '@storybook/react';
import TeamHero from '../components/TeamHero';

const storiesMeta: Meta = {
  title: `TeamHero`,
  component: TeamHero,
  parameters: {
    layout: 'fullscreen',
  },
};

export default storiesMeta;

export const THB = () => <TeamHero />;

