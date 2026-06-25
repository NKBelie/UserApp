import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList";

function AxiosUsers() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
    axios
        .get(
        "https://jsonplaceholder.typicode.com/users"
        )
        .then((response) => {
        setUsers(response.data);
        })
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return (
        <section className="page-stack">
            <div className="page-heading">
                <span className="eyebrow">Axios</span>
                <h1 className="page-title">Users</h1>
                <p className="page-subtitle">Profiles loaded with the Axios HTTP client.</p>
            </div>
            <div className="status-panel">
                <p>
                    <strong>Loading users</strong>
                    Getting the latest profile list.
                </p>
            </div>
        </section>
        );
    }

    if (error) {
        return (
        <section className="page-stack">
            <div className="page-heading">
                <span className="eyebrow">Axios</span>
                <h1 className="page-title">Users</h1>
                <p className="page-subtitle">Profiles loaded with the Axios HTTP client.</p>
            </div>
            <div className="status-panel status-panel-error">
                <p>
                    <strong>Unable to load users</strong>
                    Please try again in a moment.
                </p>
            </div>
        </section>
        );
    }

    return (
    <section className="page-stack">
        <div className="page-heading">
            <span className="eyebrow">Axios</span>
            <h1 className="page-title">Users</h1>
            <p className="page-subtitle">Profiles loaded with the Axios HTTP client.</p>
        </div>


        <UserList users={users} />
    </section>
    );
}

export default AxiosUsers;
