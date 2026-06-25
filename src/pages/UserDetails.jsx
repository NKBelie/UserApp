import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


function UserDetails() {
    const { id } = useParams();

    const fetchUser = async () => {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );


    return response.data;
    };


    const {
    data,
    isLoading,
    error,
    } = useQuery({
    queryKey: ["user", id],
    queryFn: fetchUser,
    });


    if (isLoading)
    return (
    <section className="page-stack">
        <div className="page-heading">
            <span className="eyebrow">User profile</span>
            <h1 className="page-title">Loading</h1>
            <p className="page-subtitle">Preparing the selected user profile.</p>
        </div>
        <div className="status-panel">
            <p>
                <strong>Loading user</strong>
                Fetching profile details.
            </p>
        </div>
    </section>
    );


    if (error)
    return (
    <section className="page-stack">
        <div className="page-heading">
            <span className="eyebrow">User profile</span>
            <h1 className="page-title">Unavailable</h1>
            <p className="page-subtitle">This profile could not be loaded.</p>
        </div>
        <div className="status-panel status-panel-error">
            <p>
                <strong>Unable to load user</strong>
                Please return to the users page and try again.
            </p>
        </div>
    </section>
    );

    return (
    <section className="panel detail-panel">
        <div className="page-heading">
            <span className="eyebrow">User profile</span>
            <h1 className="page-title">{data.name}</h1>
            <p className="page-subtitle">{data.company?.catchPhrase}</p>
        </div>
        <div className="detail-grid">
            <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">{data.email}</span>
            </div>
            <div className="detail-item">
                <span className="detail-label">Phone</span>
                <span className="detail-value">{data.phone}</span>
            </div>
            <div className="detail-item">
                <span className="detail-label">Website</span>
                <span className="detail-value">{data.website}</span>
            </div>
        </div>
    </section>
    );
}

export default UserDetails;
