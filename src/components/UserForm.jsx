import { useState } from "react";


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
    <form onSubmit={handleSubmit}className="panel form-panel form-grid">
        <h2 className="panel-title">New profile</h2>
        <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}className="input" required />
        </div>
        <div className="field"><label htmlFor="email"> Email</label>
            <input id="email" type="email" placeholder="Enter email" value={email} onChange={(e) =>setEmail(e.target.value) } className="input" required />
        </div>
        <button type="submit" className="button-primary">Add User</button>
    </form>
    );
}


export default UserForm;
