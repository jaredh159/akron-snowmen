import React from "react";
import styles from "./Logo.module.css";

type Props = {
  width: number;
};

const Logo: React.FC<Props> = ({ width }) => {
  const plowLayers = [];
  const whiteTrim = [];
  const innerRed = [];
  for (let i = 0; i <= width / 3; i++) {
    plowLayers.push(
      <div
        style={{
          width: width - Math.abs(Math.sin(i / (width / 9.45))) * 20,
          backgroundColor: `var(--snowmen-red)`,
          height: `1px`,
        }}
      ></div>
    );
  }
  for (let i = 0; i <= width / 3.75; i++) {
    whiteTrim.push(
      <div
        style={{
          width: (width - Math.abs(Math.sin(i / (width / 11))) * 20) / 1.1,
          backgroundColor: `white`,
          height: `1px`,
          position: "absolute",
          top: i + width / 30,
        }}
      ></div>
    );
  }
  for (let i = 0; i <= width / 4.25; i++) {
    innerRed.push(
      <div
        style={{
          width: (width - Math.abs(Math.sin(i / (width / 13))) * 20) / 1.16,
          backgroundColor: `var(--snowmen-red)`,
          height: `1px`,
          position: "absolute",
          top: i + width / 20,
        }}
      ></div>
    );
  }
  return (
    <div style={{ width: `${width}px` }} className={styles.container}>
      {[
        plowLayers,
        whiteTrim,
        innerRed,
        <h1
          style={{
            position: "absolute",
            fontSize: `${width / 7.5}px`,
            color: "white",
            fontFamily: "baskerville",
          }}
        >
          SNOWMEN
        </h1>,
      ]}
    </div>
  );
};

export default Logo;
