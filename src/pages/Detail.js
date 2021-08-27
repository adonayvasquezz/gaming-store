import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GameDetail from "../components/GameDetail/GameDetail";

const Detail = () => {

    const location = useLocation();

    useEffect(() => {
        console.log(location.state);
    }, [location.state])

    return (
        <div>
            Page Detail
            <GameDetail />
        </div>
    )
}
export default Detail;