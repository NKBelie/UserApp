import React from "react";
import UserCard from "../pages/UserCard";

function UserList({ users }) {
    return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
