import styles from "./PlanetCard.module.scss";

const PlanetCard = ({
  imgPath,
  planet,
  distanceSun,
  diameter,
  numMoons,
  yearLength,
}) => {
  let moonStyle;
  if (numMoons === 0) {
    moonStyle = styles["card__no-moons"];
  } else moonStyle = styles.card;

  return (
    <div className={moonStyle}>
      <img className={styles["card__img"]} src={imgPath} alt="planet" />
      <h3>{planet}</h3>
      <p>{diameter}</p>
      <p>{distanceSun}</p>
      <p>{numMoons}</p>
      <p>{yearLength}</p>
    </div>
  );
};

export default PlanetCard;
