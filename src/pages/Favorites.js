import { useEffect, useState } from "react";
import CardFavorite from "../components/CardFavorite/CardFavorite";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favArray = JSON.parse(localStorage.getItem("favoritesGames"));
    let gamesList = favArray.map((game, id) => (
        <div key={id} className="col-6 col-md-4 col-lg-3">
          <CardFavorite game={game} />
        </div>
      ));
      setFavorites(gamesList);
  }, []);


  return (
    <div className="container">
      <div className="row ms-5 me-5">{favorites}</div>
    </div>
  );
};

export default Favorites;
