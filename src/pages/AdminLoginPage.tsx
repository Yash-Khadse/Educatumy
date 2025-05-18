import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminLoginPage = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) navigate("/admin");
    else setError("Invalid credentials");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow max-w-xs w-full">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">Admin Login</h2>
        {error && <div className="mb-2 text-red-600">{error}</div>}
        <input className="form-input w-full mb-3" placeholder="User ID" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="form-input w-full mb-3" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" className="btn bg-purple-600 hover:bg-purple-700 text-white w-full py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default AdminLoginPage;