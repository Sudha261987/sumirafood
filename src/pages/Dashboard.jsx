import React, { useEffect, useState } from "react";
import { API_URL } from "../api";
import RecipeCard from "../assets/components/RecipeCard";

export default function Dashboard() {
  const [customRecipes, setCustomRecipes] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [tab, setTab] = useState("custom"); 
  const [editRecipe, setEditRecipe] = useState(null);
  const [form, setForm] = useState({
    name: "",
    meal: "",
    description: "",
    image: "",
    ingredients: "",
    instructions: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });

  
  const fetchCustomRecipes = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setCustomRecipes(data);
  };

  
  const loadFavourites = () => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(favs);
  };

  useEffect(() => {
    fetchCustomRecipes();
    loadFavourites();
  }, []);

  
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  
  const handleCreate = async (e) => {
    e.preventDefault();
    const payload = {
      name: form.name,
      meal: form.meal,
      description: form.description,
      image: form.image,
      ingredients: form.ingredients
        .split("\n")
        .map((i) => i.trim())
        .filter(Boolean),
      instructions: form.instructions,
      nutrition: {
        calories: form.calories,
        protein: form.protein,
        carbs: form.carbs,
        fat: form.fat,
      },
    };

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setForm({
      name: "",
      meal: "",
      description: "",
      image: "",
      ingredients: "",
      instructions: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
    });

    fetchCustomRecipes();
  };

  // 🧩 Delete recipe
  const handleDelete = async (id) => {
    if (window.confirm("Delete this recipe?")) {
      await fetch('${API_URL}/${id}, { method: "DELETE" }');
      fetchCustomRecipes();
    }
  };

  
  const handleEdit = (recipe) => {
    setEditRecipe(recipe);
    setForm({
      id:recipe.id,
      name: recipe.name,
      meal: recipe.meal,
      description: recipe.description,
      image: recipe.image,
      ingredients: recipe.ingredients?.join("\n") || "",
      instructions: recipe.instructions,
      calories: recipe.nutrition?.calories || "",
      protein: recipe.nutrition?.protein || "",
      carbs: recipe.nutrition?.carbs || "",
      fat: recipe.nutrition?.fat || "",
    });
  };

  
  const handleUpdate = async (e) => {
    e.preventDefault();
    const payload = {
      name: form.name,
      meal: form.meal,
      description: form.description,
      image: form.image,
      ingredients: form.ingredientsText
        .split("\n")
        .map((i) => i.trim())
        .filter(Boolean),
      instructions: form.instructions,
      nutrition: {
        calories: form.calories,
        protein: form.protein,
        carbs: form.carbs,
        fat: form.fat,
      },
    };

    await fetch('${API_URL}/${editRecipe.id}', {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setEditRecipe(null);
    fetchCustomRecipes();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">📋 Dashboard</h1>

      
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setTab("custom")}
          className={`px-4 py-2 rounded ${
            tab === "custom" ? "bg-red-600 text-white" : "bg-gray-200"
          }`}
        >
          My Recipes
        </button>
        <button
          onClick={() => setTab("favourites")}
          className={`px-4 py-2 rounded ${
            tab === "favourites" ? "bg-red-600 text-white" : "bg-gray-200"
          }`}
        >
          Favourites
        </button>
      </div>

      
      {tab === "custom" && (
        <>
          <form
            onSubmit={editRecipe ? handleUpdate : handleCreate}
            className="bg-white p-6 rounded shadow mb-6 flex flex-col gap-3 max-w-2xl"
          >
            <h2 className="text-lg font-semibold mb-2">
              {editRecipe ? "Edit Recipe" : "Add New Recipe"}
            </h2>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Recipe Name"
              className="p-2 border rounded"
              required
            />
            <input
              name="meal"
              value={form.meal}
              onChange={handleChange}
              placeholder="Meal Type"
              className="p-2 border rounded"
            />
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="p-2 border rounded"
            />
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              className="p-2 border rounded"
            />
            <textarea
              name="ingredients"
              value={form.ingredients}
              onChange={handleChange}
              placeholder="Ingredients (one per line)"
              className="p-2 border rounded"
            />
            <textarea
              name="instructions"
              value={form.instructions}
              onChange={handleChange}
              placeholder="Instructions"
              className="p-2 border rounded"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <input
                name="calories"
                value={form.calories}
                onChange={handleChange}
                placeholder="Calories"
                className="p-2 border rounded"
              />
              <input
                name="protein"
                value={form.protein}
                onChange={handleChange}
                placeholder="Protein (g)"
                className="p-2 border rounded"
              />
              <input
                name="carbs"
                value={form.carbs}
                onChange={handleChange}
                placeholder="Carbs (g)"
                className="p-2 border rounded"
              />
              <input
                name="fat"
                value={form.fat}
                onChange={handleChange}
                placeholder="Fat (g)"
                className="p-2 border rounded"
              />
            </div>

            <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
              {editRecipe ? "Update Recipe" : "Add Recipe"}
            </button>
          </form>

          {/* Recipe list */}
          <h2 className="text-xl font-semibold mb-4">My Custom Recipes</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {customRecipes.length === 0 ? (
              <p>No custom recipes found.</p>
            ) : (
              customRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="bg-white p-4 rounded shadow relative"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-40 object-cover rounded mb-2"
                  />
                  <h3 className="font-semibold text-lg">{recipe.name}</h3>
                  <p className="text-sm text-gray-600">{recipe.meal}</p>

                  <div className="flex justify-between mt-3">
                    <button
                      onClick={() => handleEdit(recipe)}
                      className="text-blue-600"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(recipe.id)}
                      className="text-red-600"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}

      
      {tab === "favourites" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">❤️ Favourite Recipes</h2>
          {favourites.length === 0 ? (
            <p>No favourite recipes yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {favourites.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}