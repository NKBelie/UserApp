import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import UserList from "../components/UserList";


function ReactQueryUsers() {
    const fetchUsers = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );


    return response.data;
    };


    const {
    data: users = [],
    isLoading,
    error,
    } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    });


    if (isLoading)
    return (
    <section className="page-stack">
        <div className="page-heading">
            <span className="eyebrow">React Query</span>
            <h1 className="page-title">Users</h1>
            <p className="page-subtitle">Profiles loaded with cached query state.</p>
        </div>
        <div className="status-panel">
            <p>
                <strong>Loading users</strong>
                Preparing the cached profile list.
            </p>
        </div>
    </section>
    );


    if (error)
    return (
    <section className="page-stack">
        <div className="page-heading">
            <span className="eyebrow">React Query</span>
            <h1 className="page-title">Users</h1>
            <p className="page-subtitle">Profiles loaded with cached query state.</p>
        </div>
        <div className="status-panel status-panel-error">
            <p>
                <strong>Unable to load users</strong>
                Please try again in a moment.
            </p>
        </div>
    </section>
    );


    return (
    <section className="page-stack">
        <div className="page-heading">
            <span className="eyebrow">React Query</span>
            <h1 className="page-title">Users</h1>
            <p className="page-subtitle">Profiles loaded with cached query state.</p>
        </div>


        <UserList users={users} />
    </section>
    );
}

export default ReactQueryUsers;
