import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Game_Detail } from "../Api";
import GameDetail from "../components/GameDetail/GameDetail";

const Detail = () => {

    const location = useLocation();

    const [game, setGame] = useState({
        info: {},
        cheapestPriceEver:{},
        deals: {}
    })

    useEffect(() => {
       
        (async () => {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            }
            try {
                let response = await fetch(`${Game_Detail}${location.state}`, requestOptions);
                let data = await response.json();
                setGame(data);
                console.log(data);
            } catch (error) {
                console.error('Error: ', error);
            }
        })();

    }, [location.state])

    return (
        <div>
            <GameDetail game={game} />
        </div>
    )
}
export default Detail;