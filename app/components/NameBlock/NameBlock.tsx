import { useEffect } from "react";
import styles from "./NameBlock.module.css";

// --- Utilities ---

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandomIntRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Generates negative to positive range, i.e. -15 to 15
 * getRandomPosNeg(15)
 */
function getRandomIntPosNeg(range: number) {
  return Math.floor((Math.random() * 2 - 1) * range);
}

// -----------------

interface LetterProps {
  letter: string;
}

const Letter = (props: LetterProps) => {
  const { letter } = props;

  const letterRandomizerStyle = {
    transform: `
      translateX(${getRandomIntPosNeg(5)}rem) 
      translateY(${getRandomIntPosNeg(5)}rem) 
      rotate(${getRandomInt(360)}deg)`,
  };

  const colorClasses = [styles.color1, styles.color2];

  const randomColorClass =
    colorClasses[Math.floor(Math.random() * colorClasses.length)];

  return (
    <div
      className={`${styles["name-block__letter-container"]} ${randomColorClass}`}>
      <div
        className={styles["name-block__letter"]}
        style={{ animationDuration: `${getRandomIntRange(40, 60)}s` }}>
        <div style={letterRandomizerStyle}>{letter}</div>
      </div>
    </div>
  );
};

export const NameBlock = () => {
  const name = "ADAMROWE";

  return (
    <div className={styles["name-block"]}>
      <div className={styles["name-block__info-wrapper"]}>
        <div className={styles["name-block__info"]}>
          <div className={styles.name}>Adam Rowe</div>
          <div>
            <a href="https://www.linkedin.com/in/admrwe/">
              Design systems engineer
            </a>
            , designer, <a href="https://soundcloud.com/admrwe">musician</a>
          </div>
        </div>
      </div>
      <div className={styles["name-block__filter"]}></div>
      <div className={styles["name-block__letters"]}>
        {name.split("").map((letter) => (
          <Letter key={letter} letter={letter} />
        ))}
      </div>
    </div>
  );
};
