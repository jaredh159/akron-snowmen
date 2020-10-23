import React from 'react';
import { Meta } from '@storybook/react';
import Button from './Button';

const storiesMeta: Meta = {
  title: 'Button',
  component: Button,
};

export default storiesMeta;

export const Primary = () => <Button/>;

