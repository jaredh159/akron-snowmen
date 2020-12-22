import React from 'react';
import { Meta } from '@storybook/react';
import Button from '../components/Button';

const storiesMeta: Meta = {
  title: `Button`,
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default storiesMeta;

export const Primary = () => (
  <div style={{ padding: `2em`, backgroundColor: `var(--light-purple)` }}>
    <Button>LEARN MORE</Button>
  </div>
);
