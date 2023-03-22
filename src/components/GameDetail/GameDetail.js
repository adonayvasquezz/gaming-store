import { useCallback, useEffect, useState } from "react";
import { getDate } from "../../utils/Date";
import StoreCard from "../StoreCard/StoreCard";
import styles from "./GameDetail.module.css";

const GameDetail = ({ game, store }) => {
  const [date, setDate] = useState("");
  const [stores, setStores] = useState([]);
  const [gameStatus, setGameStatus] = useState("Add to Favorites");

  useEffect(() => {
    let stores = game.deals.map((deal) => {
      let st = store.find((item) => deal.storeID === item.storeID);
      if (st) {
        deal.storeName = st.storeName;
        deal.image = st.images.logo;
      }
      return deal;
    });

    let data = stores.map((deal, id) => {
      return <StoreCard deal={deal} key={id} />;
    });
    setStores(data);
  }, [game.deals, store]);

  useEffect(() => {
   const formatedDate = getDate(game.cheapestPriceEver.date)
    setDate(formatedDate);
  }, [game.cheapestPriceEver.date]);

  const gameFavoritesStore = useCallback(() => {
    const favoritesArray = JSON.parse(localStorage.getItem("favoritesGames"));
    if (favoritesArray) {
      const gameAdded = favoritesArray.find(
        (element) => element === game.info.steamAppID
      )
        ? "Game Added"
        : "Add to Favorites";
      setGameStatus(gameAdded);
    }
  }, [game.info.steamAppID]);

  useEffect(() => {
    gameFavoritesStore();
  }, [gameFavoritesStore, gameStatus]);

  const handleFavorites = (e) => {
    e.preventDefault();

    const favoritesArray = JSON.parse(localStorage.getItem("favoritesGames"));

    if (favoritesArray === null) {
      if (!game.info.steamAppID) return;
      localStorage.setItem(
        "favoritesGames",
        JSON.stringify([game.info.steamAppID])
      );
      setGameStatus("Game added");
    } else {
      const gameExist = favoritesArray.find(
        (element) => element === game.info.steamAppID
      );
      if (gameExist) {
        const newFav = favoritesArray.filter(
          (savedGame) => savedGame !== game.info.steamAppID
        );
        localStorage.setItem("favoritesGames", JSON.stringify(newFav));
        setGameStatus("Add to favorites");
      } else {
        if (!game.info.steamAppID) return;
        const newFav = [
          ...favoritesArray,
          game.info.steamAppID && game.info.steamAppID,
        ];
        localStorage.setItem("favoritesGames", JSON.stringify(newFav));
        setGameStatus("Game added");
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div>
        {game.info.title && (
          <h1 className="my-2 text-center">{game.info.title}</h1>
        )}
        <div className={styles.imgContainer}>
          {game.info.thumb && (
            <img
              loading="lazy"
              className={styles.imgDetail}
              src={game.info.thumb}
              alt="game thumbnail"
            />
          )}
        </div>
        <div className="mt-5 d-flex justify-content-center align-items-center">
          <div>
            <label className={styles.lowestPriceText}>
              Lowest historical price:{" "}
            </label>
            {game.cheapestPriceEver.price && (
              <label className={styles.price}>
                $ {game.cheapestPriceEver.price}
              </label>
            )}

            {date && (
              <label className="mx-3 text-center fs-5 ">{date}</label>
            )}
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button
            className={
              gameStatus === "Game Added"
                ? styles.btnDarkOrange
                : styles.btnOrange
            }
            onClick={handleFavorites}
          >
            {gameStatus}
          </button>
        </div>

        <div className="row my-5">
          <h3>Stores: </h3>
          {stores}
        </div>
      </div>
    </div>
  );
};
export default GameDetail;
