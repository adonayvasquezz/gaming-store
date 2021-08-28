import { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Navbar = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const history = useHistory();

    const [search, setSearch] = useState('');

    const handleSearchTitle = (e) => {
        setSearch(e.target.value);
        //console.log(search);
    }

    const logoutHandler = () => {
        authCtx.logout();
    }

    const handleSearchClick = (e) => {
        e.preventDefault();
        history.push("/search", search);
    }

    return (
        <div>
            <nav className="d-flex justify-content-between align-items-center container mt-2 mb-4">
                <div className="d-flex justify-content-start">
                    {isLoggedIn &&
                        <NavLink exact to="/" className="inherit" activeClassName="pageSelected">Home</NavLink>}
                    {/* {isLoggedIn &&
                        <NavLink to="/favorites" className="inherit" activeClassName="pageSelected">Favorites</NavLink>} */}
                </div>
                <div className="w-50">
                    {isLoggedIn &&
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" onChange={handleSearchTitle} placeholder="Enter videogame name" aria-label="Search"></input>
                            <button className="btn btn-outline-success" onClick={handleSearchClick} type="submit">Search</button>
                        </form>}
                </div>
                <div>
                    {!isLoggedIn &&
                        <NavLink to="/auth" className="inherit" activeClassName="pageSelected">Login</NavLink>}
                    {isLoggedIn &&
                        <NavLink to="/" className="inherit" activeClassName="" onClick={logoutHandler}>Logout</NavLink>}
                </div>

            </nav>
        </div>
    )
}

export default Navbar;