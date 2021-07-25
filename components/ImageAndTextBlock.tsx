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
  imgId?: string;
  href?: string;
};

const ImageAndTextBlock: React.FC<Props> = ({
  bgColor,
  headerText,
  bgImage,
  id,
  buttonShown = true,
  right = false,
  children,
  imgId,
  href,
}) => {
  return (
    <div className={cx(styles.main, right && styles.right)} id={id}>
      <div className={styles.imageWrap}>
        <img src={bgImage} alt="@TODO" id={imgId} />
      </div>
      <div className={styles.textBlock} style={{ backgroundColor: bgColor }}>
        <h1 className={styles.header}>{headerText}</h1>
        <BodyText>{children}</BodyText>
        {buttonShown ? (
          <Button href={href} className={styles.imageAndTextBlockButton}>
            Learn More
          </Button>
        ) : (
          ``
        )}
      </div>
    </div>
  );
};

export default ImageAndTextBlock;
