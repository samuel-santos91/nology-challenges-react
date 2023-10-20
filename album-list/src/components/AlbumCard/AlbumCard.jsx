import styles from "./AlbumCard.module.scss";

const AlbumCard = ({ album, band, rating, path }) => {
  let banner;
  if (rating === 5) {
    banner = styles["card__top-rating"];
  }

  return (
    <section className={styles.card}>
      <div className={styles["card__img"]}>
        <img src={path} alt="album cover" />
      </div>
      <div className={styles["card__info"]}>
        <p>Album: {album}</p>
        <p>By: {band}</p>
        <p>Rating: {rating}</p>
      </div>
      <div className={banner}>
        <p>TOP RATING</p>
      </div>
    </section>
  );
};

export default AlbumCard;
