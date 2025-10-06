import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Dashboard from "./pages/Dashboard";

function App() {
  const isSignedIn = localStorage.getItem("signedIn") === "true";

  return (
    <>
      {isSignedIn && <Navbar />}
      <Routes>
        <Route path="/" element={isSignedIn ? <Home /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/details/:id" element={<RecipeDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;