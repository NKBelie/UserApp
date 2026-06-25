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
    <section className="page-stack">
        <div className="page-heading">
            <span className="eyebrow">Local users</span>
            <h1 className="page-title">Add User</h1>
            <p className="page-subtitle">
                Save a name and email in the current session.
            </p>
        </div>
        <UserForm addUser={addUser} />
        <UserList users={users} />
    </section>
    );
}

export default AddUser;
