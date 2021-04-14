import React from 'react';
import styles from './styles/ArticleHeadline.module.css';

type Props = {
  image: string;
  color: string;
};

const ArticleHeadline: React.FC<Props> = ({ image, color, children }) => {
  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `linear-gradient(${color}, ${color}), url(${image})` }}
    >
      {children}
    </div>
  );
};

export default ArticleHeadline;
