import React from 'react';
import { Meta } from '@storybook/react';
import Nav from '../components/Nav';

const storiesMeta: Meta = {
  title: `Nav`,
  component: Nav,
};

export default storiesMeta;

export const Primary = () => <Nav />;
