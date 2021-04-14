import React from 'react';
import styles from './styles/ArticleImage.module.css';

type Props = {
  image: string;
  direction: 'left' | 'right';
};

const Image: React.FC<Props> = ({ image, direction }) => {
  return (
    <img
      src={image}
      alt={Math.random().toString()}
      className={`${styles[direction]} ${styles.main}`}
    />
  );
};

export default Image;
