import styles from "./CardFavorite.module.css";

const CardFavorite = ({ game }) => {
  return (
    <div className={styles.card}>
      <div>
        <img
          loading="lazy"
          src={game.thumb}
          className={styles.imgCover}
          alt={game.internalName}
        ></img>
      </div>
      <div className="card-body d-flex justify-content-between flex-column">
        <h6 className="card-text text-center pt-2">
          {game.title ? game.title : game.external}
        </h6>

      </div>
    </div>
  );
};

export default CardFavorite;
