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
          Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu
          ultricies erat malesuada quis. Aliquam dapibus.
        </div>
        <Button className={styles.imageAndTextBlockButton}>LEARN MORE</Button>
      </div>
    </div>
  );
};

export default ImageAndTextBlock;
