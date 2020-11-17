import React from 'react';
import { Meta } from '@storybook/react';
import Footer from '../components/Footer';

const storiesMeta: Meta = {
  title: `Footer`,
  component: Footer,
  parameters: {
    layout: `fullscreen`,
  },
};

export default storiesMeta;

export const Primary = () => <Footer />;
