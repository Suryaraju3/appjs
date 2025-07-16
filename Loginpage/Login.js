
import React, { useState } from "react";
import api from "@/api";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await api.post("/login", { username, password });
      
      navigate("/Homepage");  

    } catch {
      alert("Login failed");
    }
  };

  return (
    <div>
    <form onSubmit={handleLogin}>

      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />

      <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

      <button type="submit">Login</button>

    </form>

    </div>
  );
}

export default LoginPage;
