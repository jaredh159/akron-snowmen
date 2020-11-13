import React from 'react';
import { Meta } from '@storybook/react';
import Footer from '../components/Footer';

const storiesMeta: Meta = {
  title: `Footer`,
  component: Footer,
  parameters: {
  layout: "fullscreen",
  }
};

export default storiesMeta;

export const Primary = () => <Footer linkPageOne="Home" linkPageTwo="Staff" linkPageThree="About Us" linkPageFour="What we do" linkOne={"https://friendslibrary.com"} linkTwo={"https://friendslibrary.com"} linkThree={"https://friendslibrary.com"} linkFour={"https://friendslibrary.com"}/>;
