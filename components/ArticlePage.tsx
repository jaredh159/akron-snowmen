import React from 'react';
import cx from 'classnames';
import ArticleHeadline from './ArticleHeadline';
import styles from './styles/ArticlePage.module.css';

type Props = {
  children: React.ReactNode;
  image: string;
  color: string;
  headline: string;
};

const ArticlePage: React.FC<Props> = ({ image, color, headline, children }) => {
  return (
    <div className="ArticlePage">
      <ArticleHeadline image={image} color={color}>
        {headline}
      </ArticleHeadline>
      <div className={cx(`antialiased`, styles.text)}>{children}</div>
    </div>
  );
};

export default ArticlePage;
