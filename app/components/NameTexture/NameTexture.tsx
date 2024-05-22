"use client";

import { useState, useEffect } from "react";
import styles from "./NameTexture.module.css";

interface LetterProps {
  letter: string;
}

const Letter = (props: LetterProps) => {
  const { letter } = props;
  /**
   * TODO: Working around NextJS static build limitations, need
   * useState and useEffect to randomize things on re-render. Without
   * this everything is statically generated at build time so it never
   * changes once deployed.
   * */
  const [randomNum, setRandomNum] = useState<number>(0.5);

  useEffect(() => {
    setRandomNum(Math.random());
  }, []);

  // --- Utilities ---
  const getRandomInt = (max: number) => Math.floor(randomNum * max);

  const getRandomIntRange = (min: number, max: number) =>
    Math.floor(randomNum * (max - min) + min);

  /**
   * Generates negative to positive range, i.e. -15 to 15
   * getRandomIntPosNeg(15)
   */
  const getRandomIntPosNeg = (range: number) =>
    Math.floor((randomNum * 2 - 1) * range);
  // -----------------

  const getRandomLetterStyle = () => ({
    transform: `
      translateX(${getRandomIntPosNeg(5)}rem) 
      translateY(${getRandomIntPosNeg(5)}rem) 
      rotate(${getRandomInt(360)}deg)`,
  });

  const getRandomAnimationDuration = () => ({
    animationDuration: `${getRandomIntRange(100, 140)}s`,
  });

  const getRandomColorClass = () => {
    const colorClasses = [styles.color1, styles.color2];
    return colorClasses[Math.floor(randomNum * colorClasses.length)];
  };

  return (
    <div
      className={`${
        styles["name-texture__letter-container"]
      } ${getRandomColorClass()}`}>
      <div
        className={styles["name-texture__letter"]}
        style={getRandomAnimationDuration()}>
        <div style={getRandomLetterStyle()}>{letter}</div>
      </div>
    </div>
  );
};

export const NameTexture = () => {
  const name = "ADAMROWE";

  return (
    <div className={styles["name-texture"]}>
      {/* <div className={styles["name-texture__filter"]}></div> */}
      <div className={styles["name-texture__letters"]}>
        {name.split("").map((letter, i) => (
          <Letter key={`${letter}-${i}`} letter={letter} />
        ))}
      </div>
    </div>
  );
};
