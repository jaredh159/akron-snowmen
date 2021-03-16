import React from 'react';
import styles from './styles/ImageAndTextBlock.module.css';
import Button from './Button';
import BodyText from './BodyText';
import cx from 'classnames';

type Props = {
  bgColor: string;
  headerText: string;
  bgImage: string;
  right?: boolean;
  buttonShown?: boolean;
  id?: string;
};

const ImageAndTextBlock: React.FC<Props> = ({
  bgColor,
  headerText,
  bgImage,
  id,
  buttonShown = true,
  right = false,
  children,
}) => {
  return (
    <div className={cx(styles.main, right && styles.right)} id={id}>
      <div className={styles.imageWrap}>
        <img src={bgImage} alt="@TODO" />
      </div>
      <div className={styles.textBlock} style={{ backgroundColor: bgColor }}>
        <h1 className={styles.header}>{headerText}</h1>
        <BodyText>{children}</BodyText>
        {buttonShown ? (
          <Button className={styles.imageAndTextBlockButton}>Learn More</Button>
        ) : (
          ``
        )}
      </div>
    </div>
  );
};

export default ImageAndTextBlock;
