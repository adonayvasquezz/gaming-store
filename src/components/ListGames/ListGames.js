import { useEffect } from "react";
import { API_URL } from "../../Api";
import { List_Deals } from "../../Api";

const ListGames = () => {

    const renderGames = async () => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {'Content-Type': 'application/json'}
        }
        try {
            let response = await fetch(`${API_URL}/${List_Deals}`, requestOptions);
            let data = await response.json();
            console.log('Data: ', data);
        } catch (error) {
            console.error('Error: ',error);
        }
    }

    useEffect(() => {
        renderGames();
    }, []);

    return(
        <div>
            List of games
        </div>
    );
}

export default ListGames;