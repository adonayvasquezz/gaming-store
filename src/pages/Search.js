import { useLocation } from "react-router-dom";
import SearchGame from "../components/SearchGame/SearchGame"

const Search = () => {

    const location = useLocation();
    const searchTitle = location.state;

    return (
        <div className="container my-5">
            <SearchGame searchTitle={searchTitle} />
        </div>
    )
}

export default Search;
