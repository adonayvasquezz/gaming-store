import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="d-flex justify-content-between">
                <div className="d-flex justify-content-start">
                    <NavLink exact to="/" className="inherit" activeClassName="pageSelected">Page 1</NavLink>
                    <NavLink to="/abc" className="inherit" activeClassName="pageSelected">Page 2</NavLink>
                </div>
                <NavLink to="/auth" className="inherit" activeClassName="pageSelected">Auth</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;