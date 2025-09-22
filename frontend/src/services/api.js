const API_BASE = "http://localhost:8080/api";

export async function login(username, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

export async function register(username, password) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

export async function getSecureData() {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_BASE}/secure/data`, {
    headers: { Authorization: "Bearer " + token },
  });
  return res.json();
}
