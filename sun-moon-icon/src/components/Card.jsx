import { useEffect, useState } from "react";

import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import styles from "./Card.module.scss";

const Card = () => {
  const [time, setTime] = useState(0);
  const [dayNight, setDayNight] = useState(sun);

  const changeTime = () => {
    setTime(Math.floor(Math.random() * 25));
  };

  useEffect(() => {
    if (time > 5 && time < 19) {
      setDayNight(sun);
    } else setDayNight(moon);
  }, [time]);

  return (
    <div className={styles.card}>
      <div className={styles["card__header"]}>
        <img src={dayNight} alt="sun/moon" />
        <p>{time}</p>
      </div>
      <button className={styles["card__btn"]} onClick={changeTime}>
        Change
      </button>
    </div>
  );
};

export default Card;
