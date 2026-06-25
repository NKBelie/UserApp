import { Link } from "react-router-dom"
import heroImage from "../assets/hero.png"

const quickLinks = [
    {
        to: "/add-user",
        title: "Add User",
        text: "Create a local profile and see it appear instantly.",
    },
    {
        to: "/fetch-users",
        title: "Fetch API",
        text: "Load remote users through the browser fetch client.",
    },
    {
        to: "/query-users",
        title: "React Query",
        text: "View cached user data with loading and error states.",
    },
];

function Home() {
    return (
        <section className="home-layout">
            <div className="hero-panel">
                <div className="hero-copy">
                    <span className="eyebrow">User dashboard</span>
                    <h1 className="page-title">Manage users with a cleaner workspace.</h1>
                    <p className="page-subtitle">
                        A compact place for local form entries, API-loaded profiles, and route-based user details.
                    </p>
                    <div className="hero-actions">
                        <Link to="/add-user" className="button-primary">
                            Add User
                        </Link>
                        <Link to="/query-users" className="button-secondary">
                            View Users
                        </Link>
                    </div>
                </div>
            </div>

            <div className="quick-grid">
                {quickLinks.map((link, index) => (
                    <Link to={link.to} className="quick-card" key={link.to}>
                        <div className="quick-card-top">
                            <h2>{link.title}</h2>
                            <span className="quick-index">0{index + 1}</span>
                        </div>
                        <p>{link.text}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}
export default Home
