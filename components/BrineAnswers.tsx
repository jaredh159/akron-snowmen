import React from "react";
// brine grid block and the normal one should be combined at some point
import GridBlock from "./GridBlock";
import BrineGridBlock from "./BrineGridBlock";
import styles from "./styles/BrineAnswers.module.css";
import BodyText from "./BodyText";

const BrineAnswers: React.FC = () => {
  return (
    <section className={styles.section}>
      {/* this could also be an image and text block if you'll give me a picture */}
      <h2 className={styles.header}>What is Brine?</h2>
      <BodyText>
        Plain and simple, brine is a mixture of salt and water. But we're not
        talking water softeners or more tasty chicken, we're talking about a
        more clean AND a more effective way to keep snow and ice off surfaces
        longer, and a faster way to clear it once its sticks.
      </BodyText>

      <div className={styles.gridContainer}>
        <h2 className={styles.header}>Fast Facts on Liquid</h2>
        <div className={styles.entireGrid}>
          <BrineGridBlock
            title="Melt snow faster"
            icon="fas fa-fire"
            className={styles.block}
            paragraph={`Liquids typically work 3-4x faster than rock salt alone. Rock salt can't melt ice until it converts to liquid brine, so we have to wait for the solid to react to moisture before it becomes effective.  Applying liquid brine directly "cuts out the middleman."`}
          />

          <BrineGridBlock
            title="A cleaner property, inside and out"
            icon="fas fa-shower"
            className={styles.block}
            paragraph="No leftover residue or rock salt sitting on surfaces provides a cleaner-looking property and reduces the high cleaning costs from salt being tracked into buildings."
          />

          <BrineGridBlock
            title="No fear when temperatures drop"
            icon="fas fa-temperature-low"
            className={styles.block}
            paragraph="Liquids blended with an additive can work at temperatures down to -30 degrees, far beyond the reach of rock salt, which generally becomes ineffective between 10-15 degrees."
          />

          <BrineGridBlock
            title="Protect the environment"
            icon="fas fa-leaf"
            className={styles.block}
            paragraph="Liquids provide as much as 75% chloride application reduction, and “stay put” where they are applied. Salt may bounce, get moved with traffic, plowed into grass and other vegetation, or end up in storm drains"
          />

          <BrineGridBlock
            title="Save money on property damage"
            icon="fas fa-dollar-sign"
            className={styles.block}
            paragraph="Liquids are up to 80% less corrosive than rock salt alone. A single ton of salt applied on a property can cause between $800-$3,000 in long-term infrastructure damage."
          />

          <BrineGridBlock
            title="Save money on snow removal costs"
            icon="fas fa-dollar-sign"
            className={styles.block}
            paragraph="Liquids make plowing quicker and require much less salt than spreading pure rock salt, saving on material and labors. All less cost for our customers!"
          />
        </div>
      </div>
    </section>
  );
};

export default BrineAnswers;
