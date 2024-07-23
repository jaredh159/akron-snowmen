import React from "react";
import cx from "classnames";
import styles from "./styles/PinkBlock.module.css";
import PinkGrid from "./PinkGrid";
import Button from "./Button";
import BodyText from "./BodyText";

const PinkBlock: React.FC = () => {
  return (
    <div
      className={cx(
        "bg-blue-800 py-12 px-16 leading-150 xl:flex xl:flex-col xl:items-center"
      )}
      id="our-services"
    >
      <h2 className="text-white">Our Services</h2>
      <BodyText className="pb-5 text-white/50 max-w-[755px]">
        Akron Snowmen services industrial, commercial, corporate, and
        residential properties in the Greater Akron area. We have the equipment,
        the skills, and the dedication to plow, shovel, and salt your property
        quickly, 24 hours a day and 7 days a week. Our goal is to keep your
        property and your customers safe. We work directly with salt suppliers
        and mines and can guarantee supply.
      </BodyText>
      <PinkGrid />

      <div className="pt-0 my-10 flex flex-col items-center">
        <BodyText className="mb-5">
          Why make the switch to liquid brine?
        </BodyText>
        <Button href="/brine" width="200px">
          Find Out More
        </Button>
      </div>
    </div>
  );
};

export default PinkBlock;
