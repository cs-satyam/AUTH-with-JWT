import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/api";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const data = await register(username, password);
        if (data.message) {
            alert("✅ " + data.message);
            navigate("/login");
        } else {
            alert("❌ Registration failed!");
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-4">
                <h2 className="text-center mb-4">📝 Register</h2>
                <form onSubmit={handleRegister} className="card p-4 shadow">
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
