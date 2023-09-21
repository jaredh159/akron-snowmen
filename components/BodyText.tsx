import React from 'react';
import cx from 'classnames';
import styles from './styles/BodyText.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const BodyText: React.FC<Props> = ({ className, children }) => {
  return <p className={cx(styles.main, className)}>{children}</p>;
};

export default BodyText;
