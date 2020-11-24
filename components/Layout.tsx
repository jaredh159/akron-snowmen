import React, { useState } from 'react';
import cx from 'classnames';
import Head from 'next/head';
import styles from './Layout.module.css';
import SlideoverMenu from './slideover-menu';
import Hamburger from './Hamburger';
import Logo from './Logo';
import Footer from './Footer';
import HNav from './HNav';

type Props = {
  title: string;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.outerWrap}>
        <SlideoverMenu
          onClose={() => setMenuOpen(false)}
          className={cx(
            menuOpen ? styles.slideoverMenuOpen : false,
            styles.slideoverMenu,
          )}
        />
        <div className={styles.topRow}>
          <Hamburger closed={true} onClick={() => setMenuOpen(!menuOpen)} />
          <Logo width={193} />
          <div style={{ width: 65 }} />
        </div>
        <HNav />
        <main className={styles.main}>{children}</main>
        <Footer className={styles.footer} />
      </div>
    </React.Fragment>
  );
};

export default Layout;
