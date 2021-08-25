import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Navbar = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    return (
        <div>
            <nav className="d-flex justify-content-between">
                <div className="d-flex justify-content-start">
                    { isLoggedIn && 
                        <NavLink exact to="/" className="inherit" activeClassName="pageSelected">Page 1</NavLink>
                    }
                    { isLoggedIn && 
                        <NavLink to="/abc" className="inherit" activeClassName="pageSelected">Page 2</NavLink>
                    }
                </div>
                { !isLoggedIn && 
                    <NavLink to="/auth" className="inherit" activeClassName="pageSelected">Auth</NavLink>}
               
            </nav>
        </div>
    )
}

export default Navbar;