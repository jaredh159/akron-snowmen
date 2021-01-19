import React from 'react';
import HeroBlock from '../components/HeroBlock';
import ContactBlock from '../components/ContactBlock';
import ImageAndTextBlock from '../components/ImageAndTextBlock';
import PinkBlock from '../components/PinkBlock';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import styles from './index.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <nav className={styles.nav}>
        <Nav />
      </nav>
      <main>
        <HeroBlock />
        <ImageAndTextBlock
          bgColor="rgb(72,71,169)"
          headerText="Sed Ipsum Dolor"
          bgImage="./clouds.jpg"
        />
        <ImageAndTextBlock
          bgColor="rgb(68,67,160)"
          headerText="Feugiat consequat"
          bgImage="./sunset.jpg"
        />
        <ImageAndTextBlock
          bgColor="rgb(65,64,152)"
          headerText="Ultricies aliqua"
          bgImage="./traffic.jpg"
        />
        <PinkBlock />
        <ContactBlock />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
