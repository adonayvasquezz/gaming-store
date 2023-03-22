import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Game_Detail, Store_Info } from "../Api";
import GameDetail from "../components/GameDetail/GameDetail";

const Detail = () => {

    const location = useLocation();

    const [game, setGame] = useState({
        info: {},
        cheapestPriceEver:{},
        deals: []
    })

    const [store, setStore] = useState([])

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
            } catch (error) {
                console.error('Error: ', error);
            }
        })();

    }, [location.state])

    useEffect(() => {
       
        (async () => {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            }
            try {
                let response = await fetch(Store_Info, requestOptions);
                let data = await response.json();
                setStore(data);
            } catch (error) {
                console.error('Error: ', error);
            }
        })();

    }, [])

    return (
        <div>
            <GameDetail game={game} store={store} />
        </div>
    )
}
export default Detail;