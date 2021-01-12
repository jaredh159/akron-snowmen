import React from 'react';
import styles from './PinkBlock.module.css';
import PinkGrid from './PinkGrid';
import Button from './Button';

const PinkBlock: React.FC = () => {
  return (
    <div className={styles.pinkBlock}>
      <h1 className={styles.h1}>Hello There!</h1>
      <p className={styles.p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, adipisci
        doloremque quidem repellat unde assumenda, recusandae accusamus non, nihil
        suscipit at! Cum laboriosam iste voluptatem architecto necessitatibus nam possimus
        blanditiis.
      </p>
      <PinkGrid />
      <div className={styles.buttonWrapper}>
        <Button>LEARN MORE</Button>
      </div>
    </div>
  );
};

export default PinkBlock;
