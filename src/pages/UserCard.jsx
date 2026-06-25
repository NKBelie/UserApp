import { Link } from "react-router-dom";


function UserCard({ user }) {
    const initials = user.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
    <article className="user-card">
        <div className="user-card-header">
            <span className="user-avatar">{initials}</span>
            <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
        </div>
        <Link
        to={`/users/${user.id}`}
        className="button-secondary"
        >
        View Details
        </Link>
    </article>
    );
}

export default UserCard;
