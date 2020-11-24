import React from 'react';
import cx from 'classnames';
import styles from './HNav.module.css';
import HNavItem from './HNavItem';

type Props = {
  className?: string;
};

const HNav: React.FC<Props> = ({ className }) => {
  return (
    <ul className={cx(className, styles.HNav)}>
      <HNavItem text="Home" url="http://akronsnowmen.com" />
      <HNavItem text="About Us" url="http://akronsnowmen.com/about-akron-snowmen" />
      <HNavItem
        text="What We Can Do"
        url="https://www.akronsnowmen.com/akron-commercial-snow-removal-services"
      />
      <HNavItem
        text="Weather & Operations"
        url="https://www.akronsnowmen.com/weather-snow-planning"
      />
      <HNavItem
        text="Contact Us"
        url="https://www.akronsnowmen.com/contact-akron-snowmen-free-snow-removal-quote"
      />
    </ul>
  );
};

export default HNav;
