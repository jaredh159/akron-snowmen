import React from "react";
import styles from "./styles/PinkGrid.module.css";
import GridBlock from "./GridBlock";

const PinkGrid: React.FC = () => {
  return (
    <div className="flex flex-col rounded-[5px] border border-solid border-white/20 max-w-[800px] md:flex-row md:flex-wrap">
      <GridBlock
        title="Plowing"
        paragraph="We plow parking lots, driveways, roads, and more, whether it be during the day, or in the middle of the night."
        className="border-b border-b-solid border-b-white/20 rounded-t md:w-1/2 md:rounded-tl md:rounded-tr-none md:border-r md:border-r-white/20 md:border-r-solid"
        icon="fas fa-snowplow"
      />
      <GridBlock
        title="Liquid Brine Treatments"
        paragraph="We also hand salt walkways to ensure no one slips on their way out."
        className="border-b border-b-solid border-b-white/20 md:w-1/2 md:rounded-tr"
        icon="fas fa-tint"
      />
      <GridBlock
        title="Walkway Clearing"
        paragraph="We hand shovel all your walk ways so you will be able to leave the house without having snow in your shoes."
        className="border-b border-b-solid border-b-white/20 md:w-1/2 md:border-r md:border-r-white/20 md:border-r-solid"
        icon="fas fa-socks"
      />
      <GridBlock
        title="Ice Removal"
        paragraph="We salt parking lots, driveways, roads and more, to keep you safe from slipping on the slick ice. "
        className="border-b border-b-solid border-b-white/20 md:w-1/2"
        icon="fas fa-icicles"
      />
      <GridBlock
        title="Available 24/7"
        paragraph="We are always available to clear your property, or touch up after a storm."
        className="border-b border-b-solid border-b-white/20 md:w-1/2 md:rounded-bl md:border-r md:border-r-white/20 md:border-r-solid"
        icon="far fa-clock"
      />
      <GridBlock
        title="Guaranteed Salt Supply"
        paragraph="We work directly with salt suppliers and mines, and can guarantee supply."
        className="border-b border-b-solid border-b-white/20 rounded-b md:w-1/2 md:rounded-br md:rounded-bl-none"
        icon="fas fa-tree"
      />
    </div>
  );
};

export default PinkGrid;
