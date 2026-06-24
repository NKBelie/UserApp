import React, { useState } from "react";


function UserForm({ addUser }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    const handleSubmit = (e) => {
    e.preventDefault();


    addUser({
        id: Date.now(),
        name,
        email,
    });


    setName("");
    setEmail("");
    };


    return (
    <form
        onSubmit={handleSubmit}
        className="max-w-md p-6 bg-white rounded-lg shadow-md space-y-4"
    >
        <h2 className="text-xl font-semibold">
        Add New User
        </h2>


        <div>
        <label className="block mb-1 font-medium">
            Name
        </label>


        <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) =>
            setName(e.target.value)
            }
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>


        <div>
        <label className="block mb-1 font-medium">
            Email
        </label>


        <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) =>
            setEmail(e.target.value)
            }
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>


        <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
        Add User
        </button>
    </form>
    );
}


export default UserForm;
