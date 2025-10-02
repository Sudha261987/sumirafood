import { useState, useEffect } from "react";

function Dashboard({ currentUser }) {
  const [favorites, setFavorites] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", desc: "" });

  
  useEffect(() => {
    if (currentUser) {
      const fav = JSON.parse(localStorage.getItem(`favorites_${currentUser.email}`)) || [];
      setFavorites(fav);

      const saved = JSON.parse(localStorage.getItem(`custom_${currentUser.email}`)) || [];
      setRecipes(saved);
    }
  }, [currentUser]);

  function saveCustom(newRecipes) {
    localStorage.setItem(`custom_${currentUser.email}`, JSON.stringify(newRecipes));
    setRecipes(newRecipes);
  }


  function handleSubmit(e) {
    e.preventDefault();
    if (form.id) {
      const updated = recipes.map((r) => (r.id === form.id ? form : r));
      saveCustom(updated);
    } else {
      const newRecipe = { ...form, id: Date.now() };
      saveCustom([...recipes, newRecipe]);
    }
    setForm({ id: null, name: "", desc: "" });
  }

  
  function handleEdit(r) {
    setForm(r);
  }

  
  function handleDelete(id) {
    const updated = recipes.filter((r) => r.id !== id);
    saveCustom(updated);
  }

  
  function handleRemoveFav(id) {
    const updated = favorites.filter((f) => f.id !== id);
    localStorage.setItem(`favorites_${currentUser.email}`, JSON.stringify(updated));
    setFavorites(updated);
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Logged in as: {currentUser.email}</p>

      {/* ----------- Favourites ----------- */}
      <h2 className="text-xl font-bold mb-2">My Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-600">No favorites yet </p>
      ) : (
        <ul className="space-y-2 mb-6">
          {favorites.map((r) => (
            <li key={r.id} className="flex justify-between items-center border p-2 rounded">
              <div>
                <h3 className="font-bold">{r.name}</h3>
                <p className="text-gray-600">{r.desc}</p>
              </div>
              <button
                onClick={() => handleRemoveFav(r.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* ----------- Custom Recipe Form ----------- */}
      <h2 className="text-xl font-bold mb-2">Add / Edit Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="desc"
          placeholder="Recipe Description"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button className="bg-orange-600 text-white px-4 py-2 rounded">
          {form.id ? "Update Recipe" : "Add Recipe"}
        </button>
      </form>

      {/* ----------- Custom Recipe List ----------- */}
      <h2 className="text-xl font-bold mb-2">My Custom Recipes</h2>
      {recipes.length === 0 ? (
        <p className="text-gray-600">No custom recipes yet </p>
      ) : (
        <ul className="space-y-2">
          {recipes.map((r) => (
            <li
              key={r.id}
              className="flex justify-between items-center border p-2 rounded"
            >
              <div>
                <h3 className="font-bold">{r.name}</h3>
                <p className="text-gray-600">{r.desc}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(r)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(r.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
