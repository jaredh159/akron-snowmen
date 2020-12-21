import React from 'react';
import styles from './PinkGrid.module.css';
import GridBlock from './GridBlock';

const PinkGrid: React.FC = () => {
  return (
    <div className={styles.entireGrid}>
      <GridBlock
        title="Lorem ipsum amet"
        paragraph="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        className={styles.block}
      />
      <GridBlock
        title="Aliquam sed nullam"
        paragraph="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        className={styles.block}
      />
      <GridBlock
        title="Sed erat ullam corper"
        paragraph="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        className={styles.block}
      />
      <GridBlock
        title="Veroeros quis lorem"
        paragraph="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        className={styles.block}
      />
      <GridBlock
        title="Urna quis bibendum"
        paragraph="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        className={styles.block}
      />
      <GridBlock
        title="Aliquam urna dapibus"
        paragraph="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus."
        className={styles.block}
      />
    </div>
  );
};

export default PinkGrid;
