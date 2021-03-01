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
          headerText="What We Do"
          bgImage="./sunset.jpg"
          id="ImageBlock"
        >
          <h4>So we get rid of your snow. Simple as that.</h4>
          Okay, not really; it takes hard work as well as dedicaton to our field and
          customers to accomplish what Akron Snowmen does for all its clients.
        </ImageAndTextBlock>
        <ImageAndTextBlock
          bgColor="rgb(68,67,160)"
          headerText="Our Services"
          bgImage="./traffic.jpg"
        >
          From salting your walkways by hand to plowing your commercial parking lot, Akron
          Snowmen does it all! Contact us today for a free bid, and we'll get rid of all
          that cold white stuff for you.
        </ImageAndTextBlock>
        <ImageAndTextBlock
          bgColor="rgb(65,64,152)"
          headerText="Our Team"
          bgImage="./clouds.jpg"
        >
          Akron Snowmen wouldn't be where it is today if it weren't for its dedicated and
          hard-working crew. They wake up long before dawn every storm to remove snow from
          all our properties. Just ask our boss, Rod Costa. Or our real boss, Kristi
          Ensminger.
        </ImageAndTextBlock>
        <PinkBlock />
        <ContactBlock />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
