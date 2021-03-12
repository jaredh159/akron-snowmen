import React from "react";
import styles from "./styles/PinkGrid.module.css";
import GridBlock from "./GridBlock";

const PinkGrid: React.FC = () => {
  return (
    <div className={styles.entireGrid}>
      <GridBlock
        title="Plowing"
        paragraph="We plow parking lots, driveways, roads, and more."
        className={styles.block}
        icon="fas fa-snowplow"
      />
      <GridBlock
        title="Ice Removal"
        paragraph="We salt parking lots, driveways, roads and more."
        className={styles.block}
        icon="fas fa-icicles"
      />
      <GridBlock
        title="Walkway Clearing"
        paragraph="We hand shovel walkways."
        className={styles.block}
        icon="fas fa-socks"
      />
      <GridBlock
        title="Walkway Salting"
        paragraph="We hand salt walkways."
        className={styles.block}
        icon="fas fa-temperature-low"
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
