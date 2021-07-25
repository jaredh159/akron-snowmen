import React from 'react';
import styles from './styles/BodyText.module.css';
import cx from 'classnames';

type Props = {
  className?: string;
};

const BodyText: React.FC<Props> = ({ className, children }) => {
  return <p className={cx(styles.main, className)}>{children}</p>;
};

export default BodyText;
