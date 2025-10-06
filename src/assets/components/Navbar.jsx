import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-orange-500 p-4 text-white flex justify-between items-center">
      <h1 className="font-bold text-3xl">Sumira Foodhub</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-300 font-bold text-xl">Home</Link>
        <Link to="/dashboard" className="hover:text-yellow-300 font-bold text-xl">Dashboard</Link>
        <button
          onClick={() => {
            localStorage.removeItem("signedIn");
            window.location.href = "#/signin";
          }}
          className="hover:text-yellow-300 font-bold text-xl"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}