import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Navbar = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () => {
        authCtx.logout();
    }

    return (
        <div>
            <nav className="d-flex justify-content-between align-items-center container mt-2 mb-4">
                <div className="d-flex justify-content-start">
                    { isLoggedIn && 
                        <NavLink exact to="/" className="inherit" activeClassName="pageSelected">Home</NavLink>
                    }
                </div>
                <div>
                { !isLoggedIn && 
                    <NavLink to="/auth" className="inherit" activeClassName="pageSelected">Login</NavLink>}
                { isLoggedIn && 
                    <NavLink to="/" className="inherit" activeClassName="" onClick={logoutHandler}>Logout</NavLink>}
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar;