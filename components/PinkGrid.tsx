import React from "react";
import styles from "./styles/PinkGrid.module.css";
import GridBlock from "./GridBlock";

const PinkGrid: React.FC = () => {
  return (
    <div className={styles.entireGrid}>
      <GridBlock
        title="Plowing"
        paragraph="We plow parking lots, driveways, roads, and more, whether it be during the day, or in the middle of the night."
        className={styles.block}
        icon="fas fa-snowplow"
      />
      <GridBlock
        title="Liquid Brine Treatments"
        paragraph="We also hand salt walkways to ensure no one slips on their way out."
        className={styles.block}
        icon="fas fa-tint"
      />
      <GridBlock
        title="Walkway Clearing"
        paragraph="We hand shovel all your walk ways so you will be able to leave the house without having snow in your shoes."
        className={styles.block}
        icon="fas fa-socks"
      />
      <GridBlock
        title="Ice Removal"
        paragraph="We salt parking lots, driveways, roads and more, to keep you safe from slipping on the slick ice. "
        className={styles.block}
        icon="fas fa-icicles"
      />
      <GridBlock
        title="Available 24/7"
        paragraph="We are always available to clear your property, or touch up after a storm."
        className={styles.block}
        icon="far fa-clock"
      />
      <GridBlock
        title="Guaranteed Salt Supply"
        paragraph="We work directly with salt suppliers and mines, and can guarantee supply."
        className={styles.block}
        icon="fas fa-tree"
      />
    </div>
  );
};

export default PinkGrid;
