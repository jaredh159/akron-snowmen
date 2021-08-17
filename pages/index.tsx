import React from 'react';
import HeroBlock from '../components/HeroBlock';
import ContactBlock from '../components/ContactBlock';
import ImageAndTextBlock from '../components/ImageAndTextBlock';
import PinkBlock from '../components/PinkBlock';
import Layout from '../components/Layout';
// import Virtuoso from '../components/Virtuoso';

const Home: React.FC = () => {
  return (
    <Layout>
      <HeroBlock />
      {/* <Virtuoso className="lg:hidden" /> */}
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
        bgImage="./plow-crew-med.jpg"
        href="/our-team"
        id="plow-contain"
      >
        Our ice management and snow removal team has years of professional experience
        serving the Greater Akron area. When you hire Snowmen, we want you to feel assured
        that your property is in good hands during a snow or ice event. Commercial snow
        removal is our full-time business and we take it very seriously.
      </ImageAndTextBlock>
      <ImageAndTextBlock
        bgColor="rgb(72,71,169)"
        headerText="Our Clients"
        bgImage="./logo-cloud-2.png"
        id="our-clients"
        href="/clients"
      >
        Akron Snowmen is best represented by our long-standing relationships with our
        clients. We recognize the level of trust and quality of workmanship required to
        maintain a good rapport with those we serve. If you’re looking for confirmation
        that Akron Snowmen is a reputable company with outstanding customer service, just
        ask them.
      </ImageAndTextBlock>
      <PinkBlock />
      <ContactBlock />
    </Layout>
  );
};

export default Home;
