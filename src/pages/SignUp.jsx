import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === form.email)) {
      alert("Email already exists ❌");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered successfully ✅ Please Sign In");
    navigate("/signin");
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" className="w-full p-2 border rounded" />
        <button className="w-full bg-green-600 text-white py-2 rounded">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
