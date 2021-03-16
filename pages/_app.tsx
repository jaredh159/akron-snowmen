import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';

const SnowmenApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <script
        src="https://kit.fontawesome.com/2f8568b58b.js"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default SnowmenApp;
