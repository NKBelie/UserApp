import React from "react";
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
    return <h2 className="text-2xl font-semibold text-slate-700">Loading...</h2>;


    if (error)
    return <h2 className="text-2xl font-semibold text-red-600">Error fetching users</h2>;


    return (
    <section className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">
        Users using TanStack React Query
        </h2>


        <UserList users={users} />
    </section>
    );
}

export default ReactQueryUsers;
