import styles from "./BusinessCard.module.scss";

import { useContext } from "react";
import { FormDataContext } from "../../context/FormDataContextProvider";

const BusinessCard = () => {
  const { data, logoPath } = useContext(FormDataContext);

  return (
    <section>
      {data && (
        <div className={styles.card}>
          <div className={styles["card__business"]}>
            <img src={logoPath} className={styles["card__business--logo"]} />
            <h3 className={styles["card__business--name"]}>{data.business}</h3>
          </div>

          <div className={styles["card__contact"]}>
            <p className={styles["card__contact--name"]}>{data.name}</p>
            <p className={styles["card__contact--title"]}>{data.title}</p>
            <p className={styles["card__contact--address"]}>{data.address}</p>
            <p className={styles["card__contact--phone"]}>{data.phone}</p>
            <p className={styles["card__contact--email"]}>{data.email}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default BusinessCard;
