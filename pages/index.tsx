import React from 'react';
import HeroBlock from '../components/HeroBlock';
import ContactBlock from '../components/ContactBlock';
import ImageAndTextBlock from '../components/ImageAndTextBlock';
import PinkBlock from '../components/PinkBlock';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <HeroBlock />

      <ImageAndTextBlock
        bgColor="rgb(68,67,160)"
        headerText="Our Services"
        bgImage="./plow2.jpg"
        href="#our-services"
      >
        From salting your walkways by hand to plowing your commercial parking lot, Akron
        Snowmen does it all. Our snow removal prices are extremely affordable and we have
        multiple billing arrangements and terms to meet your company's needs. Contact us
        today for a free quote.
      </ImageAndTextBlock>
      <ImageAndTextBlock
        bgColor="rgb(65,64,152)"
        headerText="Our Team"
        bgImage="./team.jpg"
        href="/our-team"
      >
        Our ice management and snow removal team has years of proffessional experience
        serving the Greater Akron area. When you hire Snowmen, we want you to feel assured
        that your property is in good hands during a snow or ice event. Commercial snow
        removal is our full-time business and we take it very seriously.
      </ImageAndTextBlock>
      <ImageAndTextBlock
        bgColor="rgb(72,71,169)"
        headerText="Our Clients"
        bgImage="./snow-night.jpg"
        id="about-us"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ut aliquam,
        corporis facilis possimus non. Esse eius iste nulla optio deleniti aperiam,
        deserunt nemo voluptatem tenetur, provident, quisquam fuga odio.
      </ImageAndTextBlock>
      <PinkBlock />
      <ContactBlock />
    </Layout>
  );
};

export default Home;
