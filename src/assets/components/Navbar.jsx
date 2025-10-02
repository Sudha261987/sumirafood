import { Link } from "react-router-dom";

function Navbar({ currentUser, onLogout }) {
  return (
    <nav className="bg-orange-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">🍴 Sumira Recipe Finder</h1>
      <div className="space-x-4">
        <Link to="/" className="font-semibold">Home</Link>
        <Link to="/dashboard" className="font-semibold">Dashboard</Link>
        {currentUser ? (
          <>
            <span>Hi, {currentUser.name}</span>
            <button
              onClick={onLogout}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/signin" className="font-semibold">Sign In</Link>
            <Link to="/signup" className="font-semibold">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
