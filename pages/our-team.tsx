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
          headerText="Plow Crew"
          bgImage="./plow.jpg"
          right
          buttonShown={false}
          imgId={styles.rodImg}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab culpa unde, quae ea
          corrupti voluptatum ipsam ad excepturi modi quas debitis voluptates quia vitae
          necessitatibus eveniet explicabo odit magni sint! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Sapiente praesentium rem asperiores dolore,
          laboriosam quis. Eum, at nihil vel cumque quo, debitis nemo quisquam, accusamus
          unde laboriosam obcaecati minus deserunt?
        </ImageAndTextBlock>
        <h2 className={styles.subhead}>Shovel Crew</h2>
        <ImageAndTextBlock
          bgColor="rgb(72,71,169)"
          headerText="Shovel Crew"
          bgImage="./team.jpg"
          buttonShown={false}
          imgId={styles.rodImg}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab culpa unde, quae ea
          corrupti voluptatum ipsam ad excepturi modi quas debitis voluptates quia vitae
          necessitatibus eveniet explicabo odit magni sint! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Sapiente praesentium rem asperiores dolore,
          laboriosam quis. Eum, at nihil vel cumque quo, debitis nemo quisquam, accusamus
          unde laboriosam obcaecati minus deserunt?
        </ImageAndTextBlock>
      </div>
    </Layout>
  );
};

export default Home;
