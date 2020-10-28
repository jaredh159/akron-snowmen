import React from 'react';
import styles from './Button.module.css';

console.log(styles);

const Button: React.FC = () => (
  <button className={styles.btn}>I am a button and i am cool</button>
);

export default Button;

// @TODO -- check that css modules work in storybook
