import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

const SnowmenApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        />
        <meta
          name="description"
          content="A full service ice and snow removal company locally owned and operated in
          Wadsworth, Ohio. We offer professional snow removal services to commercial,
          corporate, and industrial properties throughout Northeast Ohio. During all snow
          storms we are staffed 24 hours, providing complete peace-of-mind during every
          snow event"
        />
        <meta
          name="keywords"
          content="plowing, snow plow, snow removal, ice removal, plow truck, Wadsworth, Norton, Barberton, Medina, Akron"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default SnowmenApp;
