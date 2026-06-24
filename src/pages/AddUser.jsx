import React from "react";
import { useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

function AddUser() {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
    setUsers((prevUsers) => [
        ...prevUsers,
        user,
    ]);
    };

    return (
    <div>
        <h2>Add User</h2>
        <UserForm addUser={addUser} />
        <UserList users={users} />
    </div>
    );
}

export default AddUser;