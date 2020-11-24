import React from 'react';
import cx from 'classnames';
import styles from './Slideover-menu.module.css';
import Hamburger from './Hamburger';

type Props = {
  className?: string;
  onClose: () => unknown;
};

const SlideoverMenu: React.FC<Props> = ({ className, onClose }) => {
  return (
    <div className={cx(className, styles.menu)}>
      <div className={styles.notSureWhatThisIsYet}>
        <Hamburger closed={false} onClick={onClose} />
      </div>
      <div className={styles.flexContainer}>
        <a
          className={styles.link}
          id={styles.firstLink}
          href="https://www.akronsnowmen.com"
        >
          Home
        </a>
        <a
          className={styles.link}
          href="https://www.akronsnowmen.com/about-akron-snowmen"
        >
          About us
        </a>
        <a
          className={styles.link}
          href="https://www.akronsnowmen.com/akron-commercial-snow-removal-services"
        >
          What we can do
        </a>
        <a
          className={styles.link}
          href="https://www.akronsnowmen.com/employment-akron-snowmen"
        >
          Employment/subcontractor
        </a>
        <a
          className={styles.link}
          href="https://www.akronsnowmen.com/weather-snow-planning"
        >
          Weather & operations
        </a>
        <a
          className={styles.link}
          href="https://www.akronsnowmen.com/contact-akron-snowmen-free-snow-removal-quote"
        >
          Contact us today!
        </a>
      </div>
    </div>
  );
};

export default SlideoverMenu;
