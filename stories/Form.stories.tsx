import React from 'react';
import { Meta } from '@storybook/react';
import Form from '../components/Form';

const storiesMeta: Meta = {
  title: 'Form',
  component: Form,
  parameters: {
    layout: 'fullscreen',
  },
};

export default storiesMeta;

export const BasicForm = () => <Form />;
