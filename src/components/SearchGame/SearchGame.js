import { useEffect, useState } from "react";
import { Search_Title } from "../../Api";
import CardGame from "../CardGame.js/CardGame";

const SearchGame = ({searchTitle}) => {

    const [foundGame, setFoundGame] = useState([]);

    useEffect(() => {
        (async () => {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            }
            try {
                let response = await fetch(`${Search_Title}title=${searchTitle}&limit=20&exact=0`, requestOptions);
                let data = await response.json();
                let gamesList = data.map((game, id) => <div key={id} className="col-6 col-md-4 col-lg-3"><CardGame game={game} /></div>);
                setFoundGame(gamesList);
            } catch (error) {
                console.error('Error: ', error);
            }
        })();

    }, [searchTitle]);

    return (
        <div className="row">
            {foundGame}
        </div>
    )
}

export default SearchGame
