# React + Spring Boot JWT Authentication

This repository is a simple prototype demonstrating JWT-based authentication with a Spring Boot backend and a React frontend. It includes backend setup, frontend setup, the JWT flow, and ready-to-use React components (login, register, protected route) that integrate with Axios.

Goals:
- Simple register / login flow
- JWT issuance on login
- Protected backend endpoints
- Small, clear React example for integration

---

## Table of Contents

- Overview
- Backend (Spring Boot)
  - Dependencies
  - Running
  - Endpoints
- Frontend (React)
  - Running
  - Components (ready-to-use)
  - Axios setup
- JWT Flow
- Security / Production Notes
- License

---

## Overview

- Backend: Java 17, Spring Boot, Spring Security, JJWT
- Frontend: React, React Router, Axios, Bootstrap (optional)
- Token storage (prototype): localStorage

---

## Backend (Spring Boot)

1. Open the backend folder:
   ```powershell
   cd backend
   ```

2. Dependencies (pom.xml) — include JWT dependency:
   ```xml
   <dependency>
       <groupId>io.jsonwebtoken</groupId>
       <artifactId>jjwt</artifactId>
       <version>0.13.0</version>
   </dependency>
   ```

3. Run:
   ```powershell
   mvn spring-boot:run
   ```

API endpoints (example)
- POST /api/auth/register  — register a user
- POST /api/auth/login     — login, returns JSON { "token": "<JWT>" }
- GET  /api/secure/data    — protected, requires Authorization: Bearer <token>

Example login request:
```json
POST /api/auth/login
Content-Type: application/json

{
  "username": "user",
  "password": "pass"
}
```

Example response:
```json
{
  "token": "<JWT_TOKEN>"
}
```

---

## Frontend (React)

1. Open the frontend folder:
   ```powershell
   cd frontend
   ```

2. Install dependencies:
   ```powershell
   npm install
   ```

3. Start dev server:
   ```powershell
   npm start
   ```

Routes:
- /login
- /register
- /dashboard (protected)

Token storage:
```javascript
localStorage.setItem("token", response.data.token);
```

Attach token to requests:
```javascript
axios.get("/api/secure/data", {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});
```

---

## Ready-to-use React components

Add these files under frontend/src (or your chosen structure).

````javascript
// filepath: d:\project\AUTH\frontend\src\api\axios.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE || "http://localhost:8080",
  headers: { "Content-Type": "application/json" }
});

// Optional: attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
