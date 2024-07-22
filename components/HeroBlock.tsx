import React from "react";
import styles from "./styles/HeroBlock.module.css";
import Button from "./Button";
import BodyText from "./BodyText";
// import Virtuoso from './Virtuoso';

const HeroBlock: React.FC = () => {
  return (
    <div className="relative" id="welcome">
      <img
        src="./loader.jpg"
        className="object-cover absolute w-full h-full z-[-1]"
        alt="plow"
      />

      <div className="bg-[#5e42a6d9] pt-24 pr-20 pb-28 pl-16 lg:h-screen lg:flex lg:flex-col lg:justify-center">
        <h1 className="text-white">Akron Snowmen</h1>

        {/* not convinced that the last class does anything */}
        <BodyText className="text-opacity-50 pb-[1.8rem] lg:m-0">
          A full-service ice and snow removal company with over 20 years of
          experience, locally owned and operated in Wadsworth, Ohio. We offer
          professional snow removal services to commercial, corporate,
          industrial, and residential properties throughout Northeast Ohio.
          During the winter season we are staffed 24 hours, providing complete
          peace-of-mind during every snow event.
        </BodyText>

        <div className="lg:pt-[0.8rem] lg:w-[500px]">
          <Button
            href="#our-services-card"
            className="w-full sm:w-[400px] m-6 ml-0 lg:m-0"
          >
            Learn More
          </Button>
        </div>
      </div>
      {/* <Virtuoso className="hidden lg:block absolute top-5 right-5 w-[450px] rounded-xl px-6 py-3" /> */}
    </div>
  );
};

export default HeroBlock;
