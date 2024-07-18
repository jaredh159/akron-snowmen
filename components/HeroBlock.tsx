import React from "react";
import styles from "./styles/HeroBlock.module.css";
import Button from "./Button";
import BodyText from "./BodyText";
// import Virtuoso from './Virtuoso';

const HeroBlock: React.FC = () => {
  return (
    <div className={styles.entire} id="welcome">
      <img src="./loader.jpg" className={styles.image} alt="plow" />

      <div className={styles.overlay}>
        <h1>Akron Snowmen</h1>

        <BodyText>
          A full-service ice and snow removal company with over 20 years of
          experience, locally owned and operated in Wadsworth, Ohio. We offer
          professional snow removal services to commercial, corporate,
          industrial, and residential properties throughout Northeast Ohio.
          During the winter season we are staffed 24 hours, providing complete
          peace-of-mind during every snow event.
        </BodyText>

        <div className={styles.button}>
          <Button href="#our-services-card" className={styles.heroBlockButton}>
            Learn More
          </Button>
        </div>
      </div>
      {/* <Virtuoso className="hidden lg:block absolute top-5 right-5 w-[450px] rounded-xl px-6 py-3" /> */}
    </div>
  );
};

export default HeroBlock;
