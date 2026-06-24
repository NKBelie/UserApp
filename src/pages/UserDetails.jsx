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
    return <h2>Loading...</h2>;


    if (error)
    return <h2>Error</h2>;

    return (
    <div>
        <h2>{data.name}</h2>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
        <p>Website: {data.website}</p>
    </div>
    );
}


export default UserDetails;
