import React from 'react';
import { Meta } from '@storybook/react';
import PinkBlock from '../components/PinkBlock';

const storiesMeta: Meta = {
  title: `PinkBlock`,
  component: PinkBlock,
};

export default storiesMeta;

export const Mobile = () => <PinkBlock />;
