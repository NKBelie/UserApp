import React from "react";
import { Link } from "react-router-dom";


function UserCard({ user }) {
    return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <h3 className="text-lg font-semibold text-slate-900">{user.name}</h3>
        <p className="mt-1 text-sm text-slate-600">{user.email}</p>
        <Link
        to={`/users/${user.id}`}
        className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
        View Details
        </Link>
    </article>
    );
}

export default UserCard;
