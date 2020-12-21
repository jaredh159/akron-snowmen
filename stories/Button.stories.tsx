import React from 'react';
import { Meta } from '@storybook/react';
import Button from '../components/Button';

const storiesMeta: Meta = {
  title: `Button`,
  component: Button,
parameters: {
    layout: "centered",
  },
};

export default storiesMeta;

export const Primary = () => <Button>LEARN MORE</Button>;
