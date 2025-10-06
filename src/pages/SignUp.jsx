import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirm) {
      alert("Please fill all fields!");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    // ✅ Save user data in localStorage (demo only)
    localStorage.setItem("user", JSON.stringify({ email, password }));

    alert("Signup successful! Please sign in.");
    navigate("/signin");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-orange-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-orange-600">
          Create Account
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-2 mb-4 rounded"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button
          type="submit"
          className="bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-600"
        >
          Sign Up
        </button>

        <p className="text-center mt-3 text-sm">
          Already have an account?{" "}
          <Link to="/signin" className="text-orange-600 font-semibold">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}