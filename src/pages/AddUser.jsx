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
    <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Add User</h2>
        <UserForm addUser={addUser} />
        <UserList users={users} />
    </section>
    );
}

export default AddUser;
