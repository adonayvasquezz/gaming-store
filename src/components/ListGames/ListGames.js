import { useEffect, useState } from "react";
import { API_URL } from "../../Api";
import { List_Deals } from "../../Api";
import CardGame from "../CardGame.js/CardGame";

const ListGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: { 'Content-Type': 'application/json' }
            }
            try {
                let response = await fetch(`${API_URL}/${List_Deals}`, requestOptions);
                let data = await response.json();
                let gamesList = data.map((game, id) => <div key={id} className="col-6 col-md-4 col-lg-3"><CardGame game={game} /></div>);
                setGames(gamesList);
                console.log(data);
                return data;
            } catch (error) {
                console.error('Error: ', error);
            }
        })();

    }, []);

    return (
        <div>
            <div className="row">
                {games}
            </div>

        </div>
    );
}

export default ListGames;