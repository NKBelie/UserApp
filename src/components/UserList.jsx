import UserCard from "../pages/UserCard";

function UserList({ users }) {
    if (!users.length) {
        return (
            <div className="empty-state">
                <p>No users to show yet.</p>
            </div>
        );
    }
    return (
    <div className="user-grid">
        {users.map((user) => (
        <UserCard
            key={user.id}
            user={user}
        />
        ))}
    </div>
    );
}
export default UserList;
