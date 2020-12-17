import React from 'react';
import { Meta } from '@storybook/react';
import GridBlock from '../components/GridBlock';

const storiesMeta: Meta = {
  title: `GridBlock`,
  component: GridBlock,
};

export default storiesMeta;

export const Mobile = () => <GridBlock />;
