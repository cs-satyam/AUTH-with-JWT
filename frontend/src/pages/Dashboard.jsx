import React, { useEffect, useState } from "react";
import { getSecureData } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getSecureData().then((data) => {
            if (data.message) {
                setMessage(data.message);
            } else {
                alert("Session expired, please login again.");
                localStorage.removeItem("token");
                navigate("/login");
            }
        });
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="text-center">
            <h2 className="mb-3">📊 Dashboard</h2>
            <div className="alert alert-success">{message}</div>
            <button className="btn btn-danger mt-3" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}
