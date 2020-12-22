import React from 'react';
import styles from './Button.module.css';

const Button: React.FC = ({children}) => {
  return <span className={styles.btn}>{children} </span>;
};

export default Button;
