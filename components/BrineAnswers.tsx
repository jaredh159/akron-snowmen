import React from "react";
import BodyText from "./BodyText";
import BrineGridBlock from "./BrineGridBlock";
import styles from "./styles/BrineAnswers.module.css";

const BrineAnswers: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>The Perks of Liquid Brine</h2>

      <div className={styles.entireGrid}>
        <BrineGridBlock
          title="Melt Snow Faster"
          icon="fas fa-fire"
          className={styles.block}
          paragraph="Liquids typically work 3-4x faster than rock salt alone."
        />

        <BrineGridBlock
          title="A cleaner property, inside and out"
          icon="fas fa-shower"
          className={styles.block}
          paragraph="No leftover residue or rock salt sitting on surfaces provides a
          cleaner-looking property and reduces the high cleaning costs from
          salt being tracked into buildings."
        />

        <BrineGridBlock
          title="No fear when temperatures drop"
          icon="fas fa-temperature-low"
          className={styles.block}
          paragraph="Liquids blended with an additive can work at temperatures down to
          -30 degree, far beyond the reach of rock salt, which generally
          becomes ineffective between 10-15 degrees."
        />

        <BrineGridBlock
          title="Protect the environment"
          icon="fas fa-leaf"
          className={styles.block}
          paragraph="Liquids provide as much as 75% chloride application reduction, and
          “stay put” where they are applied. Salt may bounce, get moved with
          traffic, plowed into grass and other vegetation, or end up in storm
          drains"
        />

        <BrineGridBlock
          title="Save money on property damage"
          icon="fas fa-dollar-sign"
          className={styles.block}
          paragraph="Liquids are up to 80% less corrosive than rock salt alone. A single
          ton of salt applied on a property can cause between $800-$3,000 in
          long-term infrastructure damage."
        />
      </div>
    </section>
  );
};

export default BrineAnswers;
