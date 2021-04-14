import React from 'react';
import ArticleHeadline from './ArticleHeadline';
import styles from './styles/ArticlePage.module.css';

type Props = {
  image: string;
  color: string;
  headline: string;
};

const ArticlePage: React.FC<Props> = ({ image, color, headline, children }) => {
  return (
    <div>
      <ArticleHeadline image={image} color={color}>
        {headline}
      </ArticleHeadline>
      <div className={styles.text}>{children}</div>
    </div>
  );
};

export default ArticlePage;
