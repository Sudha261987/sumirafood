import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("signedIn", "true");
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-pink-600 text-center">
        {isLogin ? "Sign In" : "Sign Up"}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {!isLogin && (
          <input type="text" placeholder="Name" className="p-2 border rounded" />
        )}
        <input type="email" placeholder="Email" required className="p-2 border rounded" />
        <input type="password" placeholder="Password" required className="p-2 border rounded" />
        <button className="bg-pink-500 text-white py-2 rounded hover:bg-pink-600">
          {isLogin ? "Sign In" : "Sign Up"}
        </button>
      </form>

      <p className="text-sm text-center mt-3">
        {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-pink-600 underline"
        >
          {isLogin ? "Sign Up" : "Sign In"}
        </button>
      </p>
    </div>
  );
}