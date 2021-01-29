import React from 'react';
import styles from './BodyText.module.css';

type Props = {
  className?: string;
};

const BodyText: React.FC<Props> = ({ className, children }) => {
  return <div className={`${styles.main} ${className}`}>{children}</div>;
};

export default BodyText;
