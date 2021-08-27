import { useEffect, useState } from "react";
import { API_URL } from "../../Api";
import { List_Deals } from "../../Api";
import CardGame from "../CardGame.js/CardGame";

const ListGames = () => {
    const [games, setGames] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [pagination, setPagination] = useState([]);


    useEffect(() => {
        var pageArray = []
        for (let i=0; i<10; i++) {
            let page = <li key={i} onClick={()=>handlePage(i)} className="page-item"><button className="page-link">{i+1}</button></li>;
            pageArray.push(page);
        }
        setPagination(pageArray);
    }, []);

    useEffect(() => {
        (async () => {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: { 'Content-Type': 'application/json' }
            }
            try {
                let response = await fetch(`${API_URL}/${List_Deals}&pageNumber=${pageNumber}`, requestOptions);
                let data = await response.json();
                let gamesList = data.map((game, id) => <div key={id} className="col-6 col-md-4 col-lg-3"><CardGame game={game} /></div>);
                setGames(gamesList);
                console.log(data);
                return data;
            } catch (error) {
                console.error('Error: ', error);
            }
        })();

    }, [pageNumber]);

    const handlePage = (number) => {
        console.log('clicked ', number);
        setPageNumber(number);
    }

    return (
        <div>
            <div className="row my-3">
                {games}
            </div>
            <div>
                <nav aria-label="...">
                    <ul className="pagination pagination-md">
                        {pagination}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default ListGames;