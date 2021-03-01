import React from 'react';
import styles from './ImageAndTextBlock.module.css';
import Button from './Button';
import BodyText from './BodyText';

type Props = {
  bgColor: string;
  headerText: string;
  bgImage: string;
  id?: string;
};

const ImageAndTextBlock: React.FC<Props> = ({
  bgColor,
  headerText,
  bgImage,
  id,
  children,
}) => {
  return (
    <div className={styles.main} id={id}>
      <div className={styles.imageWrap}>
        <img src={bgImage} alt="@TODO" />
      </div>
      <div className={styles.textBlock} style={{ backgroundColor: bgColor }}>
        <h1 className={styles.header}>{headerText}</h1>
        <BodyText>{children}</BodyText>
        <Button className={styles.imageAndTextBlockButton}>LEARN MORE</Button>
      </div>
    </div>
  );
};

export default ImageAndTextBlock;
