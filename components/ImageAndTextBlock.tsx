import React from 'react';
import styles from './ImageAndTextBlock.module.css';
import Button from './Button';

type Props = {
  bgColor: string;
  headerText: string;
  bgImage: string;
};

const ImageAndTextBlock: React.FC<Props> = ({ bgColor, headerText, bgImage }) => {
  return (
    <div className={styles.main}>
      <div className={styles.imageWrap}>
        <img src={bgImage} alt="@TODO" />
      </div>
      <div className={styles.textBlock} style={{ backgroundColor: bgColor }}>
        <h1 className={styles.header}>{headerText}</h1>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, alias dolore.
          Architecto ipsam corporis libero est soluta ipsum culpa quas ipsa neque,
          possimus nulla odio esse itaque aspernatur quos exercitationem!
        </div>
        <Button>LEARN MORE</Button>
      </div>
    </div>
  );
};

export default ImageAndTextBlock;
