import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (user) {
      onLogin(user);
      alert("Login successful ✅");
      navigate("/");
    } else {
      alert("Invalid email or password ❌");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter Email" className="w-full p-2 border rounded" />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Enter Password" className="w-full p-2 border rounded" />
        <button className="w-full bg-orange-600 text-white py-2 rounded">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
