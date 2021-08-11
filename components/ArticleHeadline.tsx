import React from 'react';
import cx from 'classnames';
import styles from './styles/ArticleHeadline.module.css';

type Props = {
  image: string;
  color: string;
};

const ArticleHeadline: React.FC<Props> = ({ image, color, children }) => {
  return (
    <div
      className={cx(styles.main, `bg-center`)}
      style={{ backgroundImage: `linear-gradient(${color}, ${color}), url(${image})` }}
    >
      {children}
    </div>
  );
};

export default ArticleHeadline;
