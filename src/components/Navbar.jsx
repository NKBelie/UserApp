import { NavLink } from "react-router-dom"

const navLinkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition ${
        isActive
            ? "bg-blue-600 text-white"
            : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
    }`;

function Navbar() {
    return (
        <header className="border-b border-slate-200 bg-white shadow-sm">
            <nav className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <NavLink to="/" className="text-xl font-bold text-blue-600">
                    User App
                </NavLink>

                <div className="flex flex-wrap gap-2">
                    <NavLink to="/" className={navLinkClass}>
                        Home
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
