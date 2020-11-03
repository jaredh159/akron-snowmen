import React from 'react';
import Head from 'next/head';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Akron Snowmen</title>
      </Head>
      <h1>Akron Snowmen hello</h1>
      <Button />
    </>
  );
};

export default Home;
