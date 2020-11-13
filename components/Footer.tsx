import React from 'react';
import styles from './Footer.module.css';

type Props = {
linkOne: string;
linkTwo: string;
linkThree: string;
linkFour: string;
linkPageOne: string;
linkPageTwo: string;
linkPageThree: string;
linkPageFour: string;
}

const Footer: React.FC<Props> = ({linkOne, linkTwo, linkThree, linkFour, linkPageOne, linkPageTwo, linkPageThree, linkPageFour}) => {
  return (
    <div className={styles.mainDivForFooter}>
      <a className="links" href={linkOne}>{linkPageOne}</a>
      <a className="links" href={linkTwo}>{linkPageTwo}</a>
      <a className="links" href={linkThree}>{linkPageThree}</a>
      <a className="links" href={linkFour}>{linkPageFour}</a>
    </div>
  )
};

export default Footer;
