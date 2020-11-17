import React from 'react';
import { Meta } from '@storybook/react';
import Hamburger from '../components/Hamburger';

const storiesMeta: Meta = {
  title: `Hamburger`,
  component: Hamburger,
};

export default storiesMeta;

export const Closed = () => <Hamburger closed={true} />;
export const Open = () => <Hamburger closed={false} />;
