import styles from "./FlexList.module.scss";
import data from "../data/albums/albumsList.json";

import AlbumCard from "../components/AlbumCard/AlbumCard";

const FlexList = () => {
  return (
    <div className={styles["list-container"]}>
      {data.map((elem, index) => (
        <AlbumCard
          key={index}
          album={elem.title}
          band={elem.band}
          rating={elem.rating}
          path={elem.imgPath}
        />
      ))}
    </div>
  );
};

export default FlexList;
