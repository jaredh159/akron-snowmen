import React from 'react';
import { Meta } from '@storybook/react';
import SlideoverMenu from '../components/slideover-menu';

const storiesMeta: Meta = {
  title: `SlideoverMenu`,
  component: SlideoverMenu,
  parameters: {
    layout: "fullscreen",
  }
};

export default storiesMeta;

export const Slideover_Menu = () => <SlideoverMenu />;
