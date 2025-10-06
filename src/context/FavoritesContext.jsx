import { useFavorites } from "../context/FavoritesContext";

export default function Dashboard() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">My Favourites</h1>
      {favorites.length === 0 ? (
        <p>No favourites yet!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {favorites.map((r) => (
            <div key={r.id} className="bg-white rounded-lg shadow p-3">
              <img src={r.image} alt={r.name} className="rounded-lg h-32 w-full object-cover" />
              <h2 className="text-lg font-semibold mt-2">{r.name}</h2>
              <button
                onClick={() => removeFavorite(r.id)}
                className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}