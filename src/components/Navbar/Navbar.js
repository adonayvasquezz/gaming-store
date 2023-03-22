import { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import styles from './Navbar.module.css';

const Navbar = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const history = useHistory();

    const [search, setSearch] = useState('');

    const handleSearchTitle = (e) => {
        setSearch(e.target.value);
    }

    const logoutHandler = () => {
        authCtx.logout();
    }

    const handleSearchClick = (e) => {
        e.preventDefault();
        history.push("/search", search);
    }

    return (
        <div className={styles.navbarContainer}>
            <nav className="d-flex justify-content-between align-items-center container pt-2 pb-2 mb-2">
                <div className="d-flex justify-content-start">
                  
                        <NavLink exact to="/" className="btnCommon" activeClassName="pageSelected">Home</NavLink>
                    {/* {isLoggedIn &&
                        <NavLink to="/favorites" className="inherit" activeClassName="pageSelected">Favorites</NavLink>} */}
                </div>
                <div className="w-50">
                    {isLoggedIn &&
                        <form className="d-flex align-items-center">
                            <input className="form-control me-2 inputSearchbar" type="search" onChange={handleSearchTitle} placeholder="Enter videogame name" aria-label="Search"></input>
                            <button className={styles.btnSearch} onClick={handleSearchClick} type="submit">Search</button>
                        </form>}
                </div>
                <div>
                    {!isLoggedIn &&
                        <NavLink to="/auth" className="btnCommon" activeClassName="pageSelected">Login</NavLink>}
                    {isLoggedIn &&
                        <NavLink to="/" className="btnCommon" onClick={logoutHandler}>Logout</NavLink>}
                </div>

            </nav>
        </div>
    )
}

export default Navbar;