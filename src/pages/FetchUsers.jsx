import React from "react"
import { useEffect, useState } from "react"
import UserList from "../components/UserList";


function FetchUsers() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
    fetch(
        "https://jsonplaceholder.typicode.com/users"
    )
        .then((response) =>
        response.json()
        )
        .then((data) => setUsers(data))
        .catch((error) =>
        console.log(error)
        );
    }, []);


    return (
    <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">
        Users using Fetch API
        </h2>


        <UserList users={users} />
    </section>
    );
}

export default FetchUsers;
