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
                        <NavLink exact to="/" className="inherit" activeClassName="pageSelected">Home</NavLink>
                    }
                   {/*  { isLoggedIn && 
                        <NavLink to="/abc" className="inherit" activeClassName="pageSelected">Page 2</NavLink>
                    } */}
                </div>
                <div>
                { !isLoggedIn && 
                    <NavLink to="/auth" className="inherit" activeClassName="pageSelected">Login</NavLink>}
                { isLoggedIn && 
                    <NavLink to="/" className="inherit" activeClassName="pageSelected">Logout</NavLink>}
                </div>
                
               
            </nav>
        </div>
    )
}

export default Navbar;