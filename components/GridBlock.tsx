import React from 'react';
import styles from './GridBlock.module.css';
import cx from 'classnames';

type Props = {
  title: string;
  paragraph: string;
  className: string;
};

const GridBlock: React.FC<Props> = ({ title, paragraph, className }) => {
  return (
    <div className={cx(styles.entireBlock, className)}>
      <div className={styles.leftChunk}>
        <div className={styles.icon}></div>
      </div>
      <div className={styles.rightChunk}>
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default GridBlock;
