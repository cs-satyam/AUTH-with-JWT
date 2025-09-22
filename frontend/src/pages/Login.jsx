import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = await login(username, password);
        if (data.token) {
            localStorage.setItem("token", data.token);
            navigate("/dashboard");
        } else {
            alert("❌ Invalid credentials!");
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-4">
                <h2 className="text-center mb-4">🔐 Login</h2>
                <form onSubmit={handleLogin} className="card p-4 shadow">
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
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
