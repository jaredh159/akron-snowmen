import React from 'react';
import { Meta } from '@storybook/react';
import Logo from '../components/Logo';

const storiesMeta: Meta = {
  title: `Logo`,
  component: Logo,
};

export default storiesMeta;

export const Primary = () => (
  <>
    <Logo width={300} />
    <br />
    <Logo width={250} />
    <br />
    <Logo width={200} />
  </>
);
