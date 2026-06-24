import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList";

function AxiosUsers() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
    axios
        .get(
        "https://jsonplaceholder.typicode.com/users"
        )
        .then((response) => {
        setUsers(response.data);
        })
        .catch((error) =>
        console.log(error)
        );
    }, []);


    return (
    <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">
        Users using Axios
        </h2>


        <UserList users={users} />
    </section>
    );
}

export default AxiosUsers;
