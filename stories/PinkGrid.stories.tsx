import React from 'react';
import { Meta } from '@storybook/react';
import PinkGrid from '../components/PinkGrid';

const storiesMeta: Meta = {
  title: `PinkGrid`,
  component: PinkGrid,
};

export default storiesMeta;

export const Mobile = () => <PinkGrid />;
