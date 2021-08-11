import React from 'react';
import cx from 'classnames';
import styles from './styles/PinkBlock.module.css';
import PinkGrid from './PinkGrid';
import Button from './Button';
import BodyText from './BodyText';

const PinkBlock: React.FC = () => {
  return (
    <div
      className={cx(styles.pinkBlock, `xl:flex flex-col items-center`)}
      id="our-services"
    >
      <h2 className={cx(styles.h1)}>Our Services</h2>
      <BodyText className={styles.p}>
        Akron Snowmen services industrial, commercial, and corporate properties in the
        Greater Akron area. We have the tools, the skills, and the dedication to plow,
        shovel, and salt your property quickly, 24 hours a day and 7 days a week. Our goal
        is to keep your property and your customers safe. We work directly with salt
        suppliers and mines and can guarantee supply.
      </BodyText>
      <PinkGrid />
      <div className={styles.buttonWrapper}>
        <Button href="#contact-us" width="200px">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default PinkBlock;
