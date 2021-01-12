import React from 'react';
import styles from './Button.module.css';

const Button: React.FC = ({ children }) => {
  return <div className={styles.btn}>{children} </div>;
};

export default Button;
