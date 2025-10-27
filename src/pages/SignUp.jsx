import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow my-6 flex flex-col gap-3">
      <h2 className="text-xl font-semibold text-center">Sign Up</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="p-2 border rounded" required />
      <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Sign Up</button>
    </form>
  );
}