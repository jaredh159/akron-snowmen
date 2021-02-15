import React from 'react';
import styles from './PinkBlock.module.css';
import PinkGrid from './PinkGrid';
import Button from './Button';
import BodyText from './BodyText';

const PinkBlock: React.FC = () => {
  return (
    <div className={styles.pinkBlock} id="pinkBlock">
      <h2 className={styles.h1}>What we do</h2>
      <BodyText className={styles.p}>
        Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu
        ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum,
        urna est aliquam sem, sit amet imperdiet est velit quis lorem.
      </BodyText>
      <PinkGrid />
      <div className={styles.buttonWrapper}>
        <Button width="200px">LEARN MORE</Button>
      </div>
    </div>
  );
};

export default PinkBlock;
