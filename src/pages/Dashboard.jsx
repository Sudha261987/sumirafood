import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { recipesData } from "../data/Recipes";

export default function Dashboard() {
  const [favourites, setFavourites] = useState([]);
  const [customRecipes, setCustomRecipes] = useState([]);
  const [form, setForm] = useState({
    name: "",
    meal: "",
    desc: "",
    image: "",
    ingredients: "",
    instructions: "",
    nutrition: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  
  useEffect(() => {
    const favIds = JSON.parse(localStorage.getItem("favourites")) || [];
    const storedCustom = JSON.parse(localStorage.getItem("customRecipes")) || [];
    const favDefault = recipesData.filter((r) => favIds.includes(r.id));
    const favCustom = storedCustom.filter((r) => favIds.includes(r.id));

    // ✅ Merge both favourites
    const allFavs = [...favDefault, ...favCustom];

    setFavourites(allFavs);
    
  }, []);

  useEffect(() => {
    localStorage.setItem("customRecipes", JSON.stringify(customRecipes));
  }, [customRecipes]);

  // 🔤 Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // ➕ Add / Update
  const handleAddRecipe = (e) => {
    e.preventDefault();
    if (!form.name || !form.meal) {
      alert("Please fill at least name and meal type!");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      ...form,
      ingredients: form.ingredients.split(",").map((i) => i.trim()),
      instructions: form.instructions.split(",").map((i) => i.trim()),
      nutrition: form.nutrition,
    };

    if (editingIndex !== null) {
      const updated = [...customRecipes];
      updated[editingIndex] = newRecipe;
      setCustomRecipes(updated);
      setEditingIndex(null);
      alert("Recipe updated successfully!");
    } else {
      setCustomRecipes([...customRecipes, newRecipe]);
      alert("Recipe added successfully!");
    }

    setForm({
      name: "",
      meal: "",
      desc: "",
      image: "",
      ingredients: "",
      instructions: "",
      nutrition: "",
    });
  };

  // ✏️ Edit
  const handleEdit = (index) => {
    const r = customRecipes[index];
    setForm({
      name: r.name,
      meal: r.meal,
      desc: r.desc,
      image: r.image,
      ingredients: r.ingredients.join(", "),
      instructions: r.instructions.join(", "),
      nutrition: r.nutrition,
    });
    setEditingIndex(index);
  };

  
  const handleDelete = (index) => {
    if (confirm("Delete this recipe?")) {
      const updated = [...customRecipes];
      updated.splice(index, 1);
      setCustomRecipes(updated);
    }
  };

  return (
    <div className="p-6 bg-orange-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-orange-600 text-center">
        🍽️ My Dashboard
      </h2>

      {/* ---------- Add / Edit Recipe Form ---------- */}
      <div className="bg-white shadow-md rounded-xl p-4 mb-6 max-w-3xl mx-auto">
        <h3 className="text-lg font-semibold mb-2 text-orange-600">
          {editingIndex !== null ? "✏️ Edit Recipe" : "➕ Add New Recipe"}
        </h3>
        <form onSubmit={handleAddRecipe} className="grid gap-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Recipe Name"
            className="border p-2 rounded"
          />
          <input
            name="meal"
            value={form.meal}
            onChange={handleChange}
            placeholder="Meal Type"
            className="border p-2 rounded"
          />
          <input
            name="desc"
            value={form.desc}
            onChange={handleChange}
            placeholder="Description"
            className="border p-2 rounded"
          />
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="border p-2 rounded"
          />
          <input
            name="ingredients"
            value={form.ingredients}
            onChange={handleChange}
            placeholder="Ingredients (comma separated)"
            className="border p-2 rounded"
          />
          <input
            name="instructions"
            value={form.instructions}
            onChange={handleChange}
            placeholder="Instructions (comma separated)"
            className="border p-2 rounded"
          />
          <input
            name="nutrition"
            value={form.nutrition}
            onChange={handleChange}
            placeholder="Nutrition Info"
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            {editingIndex !== null ? "Update Recipe" : "Add Recipe"}
          </button>
        </form>
      </div>

      {/* ---------- Favourite Recipes ---------- */}
      <h2 className="text-2xl font-semibold mb-3 text-orange-600">
        ❤️ Favourite Recipes
      </h2>
      {favourites.length === 0 ? (
        <p className="text-gray-500 mb-6">No favourite recipes yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {favourites.map((r) => (
            <div
              key={r.id}
              className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition"
            >
              {r.image && (
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-full h-36 object-cover rounded"
                />
              )}
              <h4 className="font-semibold mt-2">{r.name}</h4>
              <p className="text-sm text-gray-500">{r.meal}</p>
              <Link
                to={`/details/${r.id}`}
                className="text-orange-600 text-sm hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* ---------- Custom Recipes Section ---------- */}
      <h3 className="text-xl font-semibold mb-3 text-orange-600">
        🧡 My Custom Recipes
      </h3>
      {customRecipes.length === 0 ? (
        <p className="text-gray-500">No custom recipes yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {customRecipes.map((r, index) => (
            <div
              key={r.id}
              className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition"
            >
              {r.image && (
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-full h-36 object-cover rounded"
                />
              )}
              <h4 className="font-semibold mt-2">
                {r.name}</h4>
              <p className="text-sm text-gray-500 mb-1">{r.meal}</p>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {r.desc}
              </p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-sm bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}