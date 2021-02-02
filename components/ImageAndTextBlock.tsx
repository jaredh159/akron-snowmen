import React from 'react';
import styles from './ImageAndTextBlock.module.css';
import Button from './Button';
import BodyText from './BodyText';

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
        <BodyText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem fugiat, sed ipsa
          ad ab temporibus sequi quasi beatae nihil accusamus fugit? Vero ipsam velit
          obcaecati ipsum neque itaque ullam rerum.
        </BodyText>
        <Button className={styles.imageAndTextBlockButton}>LEARN MORE</Button>
      </div>
    </div>
  );
};

export default ImageAndTextBlock;
