import React from 'react';
import styles from './Button.module.css';

type Props = {
  whatItSays: string;
};

const Button: React.FC<Props> = ({ whatItSays }) => {
  return <span className={styles.btn}> {whatItSays}</span>;
};

export default Button;
