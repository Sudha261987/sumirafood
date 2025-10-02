import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("currentUser"));
    if (saved) setCurrentUser(saved);
  }, []);

  function register({ name, email, password }) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((u) => u.email === email)) {
      return { ok: false, message: "Email already exists ❌" };
    }
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    return { ok: true };
  }

  function login({ email, password }) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) return { ok: false, message: "Invalid email or password" };

    const payload = { name: user.name, email: user.email };
    setCurrentUser(payload);
    localStorage.setItem("currentUser", JSON.stringify(payload));
    return { ok: true, user: payload };
  }

  function logout() {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  }

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
