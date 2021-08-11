import React from 'react';
import Layout from '../components/Layout';
import TeamHero from '../components/TeamHero';
import ImageAndTextBlock from '../components/ImageAndTextBlock';
import styles from './../components/styles/our-team.module.css';

const Home: React.FC = () => {
  return (
    <Layout>
      <TeamHero />
      <div className="staff">
        <h2 className={styles.subhead}>Management Team</h2>
        <ImageAndTextBlock
          bgColor="rgb(72,71,169)"
          headerText="Rod Costa"
          bgImage="./rod.jpg"
          buttonShown={false}
          imgId={styles.rodImg}
        >
          Rod has been in the snow removal business for more than 20 years. With his
          expertise in storm prediction and preparation and the attention to detail he
          instills in his snow management team, he is the glue that holds Akron Snowmen
          together. His favorite part of being a business owner is the people he works
          with.
        </ImageAndTextBlock>
        <ImageAndTextBlock
          bgColor="rgb(68,67,160)"
          headerText="Kristi Ensminger"
          bgImage="./kristi.jpg"
          buttonShown={false}
          right={true}
          imgId={styles.kristiImg}
        >
          Kristi has been in snow removal for 6 years. She is the primary contact for
          customer-related concerns before, during, and after the storm, but also enjoys
          her long and quiet nights in the plow truck.
        </ImageAndTextBlock>
        <ImageAndTextBlock
          bgColor="rgb(65,64,152)"
          headerText="Josué Rodríguez"
          bgImage="./josue2.jpg"
          buttonShown={false}
          imgId={styles.josueImg}
        >
          Josué <em>(Ho-Sway)</em> has been a part of our snow removal team for 3 years.
          From pre-season bid writing to team management during the storm, he is involved
          in many aspects of snow removal. At 37, he still gets a kick out of sledding
          once the storm is over.
        </ImageAndTextBlock>
        <h2 className={styles.subhead}>Plow Crew</h2>
        <ImageAndTextBlock
          bgColor="rgb(72,71,169)"
          headerText=""
          bgImage="./plow-crew.jpg"
          right
          buttonShown={false}
          imgId={styles.rodImg}
        >
          Our experienced plow truck drivers and machine operators work tirelessly for the
          duration of each storm to ensure employees and customers remain safe while on
          your property. We take our job seriously, and have taken time to study and train
          on best snow removal practices and techniques. We also record and log our
          services in real-time on each property, so there’s never a question about the
          work we perform.
        </ImageAndTextBlock>
        <h2 className={styles.subhead}>Walkway Crew</h2>
        <ImageAndTextBlock
          bgColor="rgb(72,71,169)"
          headerText=""
          bgImage="./team.jpg"
          buttonShown={false}
          imgId={styles.rodImg}
        >
          Regardless of the weather conditions and duration of the storm, we have a
          committed crew of shovelers and snow blower operators working “in the thick of
          it” to keep walking surfaces free of ice and snow. Our team is ready at a
          moment’s notice and can handle any depth of walkway accumulation, which they
          often ensure is long-gone well before your alarm goes off.
        </ImageAndTextBlock>
      </div>
    </Layout>
  );
};

export default Home;
