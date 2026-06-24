import React from "react";
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
    return <h2 className="text-2xl font-semibold text-slate-700">Loading...</h2>;


    if (error)
    return <h2 className="text-2xl font-semibold text-red-600">Error</h2>;

    return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-bold text-slate-900">{data.name}</h2>
        <div className="mt-4 space-y-2 text-slate-700">
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Website: {data.website}</p>
        </div>
    </section>
    );
}


export default UserDetails;
