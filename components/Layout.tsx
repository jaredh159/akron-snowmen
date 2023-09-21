import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import styles from './styles/Layout.module.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const showStormHelper = true;
  return (
    <div className={styles.layout}>
      {showStormHelper && (
        <div className="bg-red-900 px-6 py-3 text-white text-sm text-center lg:hidden">
          Please note: Akron Snowmen <em>ONLY</em> works with{` `}
          <b className="underline">commercial</b> clients. We do not plow or shovel
          residential driveways or walks. Sorry, no exceptions!
        </div>
      )}
      <nav className={styles.nav}>
        <Nav />
      </nav>
      <main>
        {showStormHelper && (
          <div className="hidden lg:block bg-red-900 px-6 py-5 text-white text-sm text-center">
            Please note: Akron Snowmen <em>ONLY</em> works with{` `}
            <b className="underline">commercial</b> clients. We do not plow or shovel
            residential driveways or walks. Sorry, no exceptions!
          </div>
        )}
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
