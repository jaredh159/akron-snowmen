import React, { useState } from 'react';
import styles from './Nav.module.css';
import cx from 'classnames';

const Nav: React.FC = () => {
  const [active, setActive] = useState<'welcome' | 'about' | 'services' | 'contact'>(
    'welcome',
  );

  return (
    <ul className={styles.outerNav}>
      <li
        className={cx(styles.link, active === 'welcome' ? styles.active : '')}
        onClick={() => setActive('welcome')}
      >
        <a href="#welcome">Welcome</a>
      </li>

      <li
        className={cx(styles.link, active === 'about' ? styles.active : '')}
        onClick={() => setActive('about')}
      >
        <a href="#about-us">About us</a>
      </li>

      <li
        className={cx(styles.link, active === 'services' ? styles.active : '')}
        onClick={() => setActive('services')}
      >
        <a href="#our-services">Our Services</a>
      </li>

      <li
        className={cx(styles.link, active === 'contact' ? styles.active : '')}
        onClick={() => setActive('contact')}
      >
        <a href="#contact-us">Contact Us</a>
      </li>
    </ul>
  );
};

export default Nav;
