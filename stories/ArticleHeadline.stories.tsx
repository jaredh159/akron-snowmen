import React from 'react';
import { Meta } from '@storybook/react';
import ArticleHeadline from '../components/ArticleHeadline';

const storiesMeta: Meta = {
  title: `ArticleHeadline`,
  component: ArticleHeadline,
};

export default storiesMeta;

export const Primary = () => (
  <ArticleHeadline color="rgba(183, 78, 145, 0.2)" image="./sunset.jpg">
    Josue Rodriguez
  </ArticleHeadline>
);

export const LongText = () => (
  <ArticleHeadline color="rgba(183, 78, 145, 0.2)" image="./sunset.jpg">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio reiciendis cumque aut
    laborum excepturi.{' '}
  </ArticleHeadline>
);
