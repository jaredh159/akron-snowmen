import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';

const SnowmenApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default SnowmenApp;
