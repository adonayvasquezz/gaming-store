import { useEffect, useState } from "react"
import { Multiple_Games } from "../Api";
import CardGame from "../components/CardGame.js/CardGame";

const Favorites = () => {

    const [favorites, setFavorites] = useState([]);
    const [favIdList, setfavIdList] = useState('')

    useEffect(() => {
        let favArray = JSON.parse(localStorage.getItem('favoritesGames'));
        let unique = [...new Set(favArray)];
        let favStringId = unique.toString();
        setfavIdList(favStringId);

    }, [favIdList])

     useEffect(() => {
        (async () => {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: { 'Content-Type': 'application/json' }
            }
            try {
                let response = await fetch(`${Multiple_Games}${favIdList}`, requestOptions);
                let data = await response.json();
                let gamesList = data.map((game, id) => <div key={id} className="col-6 col-md-4 col-lg-3"><CardGame game={game} /></div>);
                setFavorites(gamesList);
                return data;
            } catch (error) {
                console.error('Error: ', error);
            }
        })();

    }, [favIdList]);

    return (
        <div>
            {favorites}
        </div>
    )
}

export default Favorites
