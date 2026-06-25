import { NavLink } from "react-router-dom"

const navLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? "nav-link-active" : ""}`;

function Navbar() {
    return (
        <header className="site-header">
            <nav className="site-nav">
                <NavLink to="/" className="brand-link">
                    <span>User App</span>
                </NavLink>

                <div className="nav-links">
                    <NavLink to="/" className={navLinkClass}>
                        Home
                    </NavLink>
                    <NavLink to="/add-user" className={navLinkClass}>
                        Add User
                    </NavLink>
                    <NavLink to="/fetch-users" className={navLinkClass}>
                        Fetch Users
                    </NavLink>
                    <NavLink to="/axios-users" className={navLinkClass}>
                        Axios Users
                    </NavLink>
                    <NavLink to="/query-users" className={navLinkClass}>
                        React Query
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
export default Navbar
