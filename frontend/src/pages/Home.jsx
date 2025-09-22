import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="text-center">
            <h2 className="mb-3">🏠 Welcome Home</h2>
            <div className="d-flex justify-content-center gap-3">
                <Link className="btn btn-primary" to="/login">
                    Login
                </Link>
                <Link className="btn btn-success" to="/register">
                    Register
                </Link>
                <Link className="btn btn-warning" to="/dashboard">
                    Dashboard
                </Link>
            </div>
        </div>
    );
}
