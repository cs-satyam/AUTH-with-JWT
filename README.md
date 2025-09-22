# React + Spring Boot JWT Authentication

This is a simple prototype project demonstrating **JWT-based authentication** using **Spring Boot** as the backend and **React** as the frontend. Users must log in to access protected routes.

---

## Features

- User registration and login
- JWT authentication
- Protected backend routes
- Simple React frontend with route protection
- CORS enabled for frontend-backend communication

---

## Technologies Used

**Backend:**

- Java 17
- Spring Boot 3.5.6
- Spring Security
- JSON Web Tokens (JJWT)
- Maven for dependency management

**Frontend:**

- React
- React Router
- Bootstrap 5
- LocalStorage for JWT token storage

---

## Backend Setup

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd backend
Make sure pom.xml has the following dependencies for JWT:

xml
Copy code
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.13.0</version>
</dependency>
Run the Spring Boot application:

bash
Copy code
mvn spring-boot:run
API Endpoints:

Endpoint	Method	Description
/api/auth/register	POST	Register a new user
/api/auth/login	POST	Login and receive JWT
/api/secure/data	GET	Protected route, requires JWT

Example Register Request:

json
Copy code
POST /api/auth/register
Content-Type: application/json

{
  "username": "testuser",
  "password": "testpass"
}
Example Login Request:

json
Copy code
POST /api/auth/login
Content-Type: application/json

{
  "username": "testuser",
  "password": "testpass"
}
Response:

json
Copy code
{
  "token": "<JWT_TOKEN>"
}
Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Run the React development server:

bash
Copy code
npm start
Frontend Pages:

/login – Login page

/register – Register page

/dashboard – Protected page (requires JWT)

Storing and using JWT token:

After login, store the token in localStorage:

javascript
Copy code
localStorage.setItem("token", response.data.token);
Send the token in headers for protected requests:

javascript
Copy code
axios.get("/api/secure/data", {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});
Protect frontend routes:

javascript
Copy code
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};
How JWT Works in This Project
User registers at /api/auth/register.

User logs in at /api/auth/login and receives a JWT token.

The token is stored in localStorage on the frontend.

For protected routes, the frontend sends the JWT in the Authorization header:

makefile
Copy code
Authorization: Bearer <token>
Spring Boot validates the token using JwtFilter. If valid, the request is allowed; otherwise, it is blocked.

Notes
This is a prototype project. For production, consider:

Using a database to store users

Hashing passwords with BCrypt

Refresh tokens for longer sessions

HTTPS for secure token transmission

License
This project is licensed under the MIT License.

pgsql
Copy code

This single file includes everything: **backend, frontend, JWT flow, and examples**.  

If you want, I can also create a **ready-to-copy React + Axios frontend snippet** for login, regis
