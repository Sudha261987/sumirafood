import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy auth
    localStorage.setItem("signedIn", "true");
    navigate("/", { replace: true }); // ✅ Redirect after signin
    window.location.reload(); // ✅ Force re-render of Navbar and Routes
  };

  return (
    <div className="flex justify-center items-center h-screen bg-orange-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
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
        <button className="bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-600">
          Sign In
        </button>
        <p className="text-center mt-3 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-orange-600 font-semibold">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}