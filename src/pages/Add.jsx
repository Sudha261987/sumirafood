import { useState } from "react";

export default function Add() {
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: "",
    steps: "",
    image: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("customRecipes")) || [];
    const newRecipe = {
      id: Date.now(), // unique id
      ...recipe,
      ingredients: recipe.ingredients.split(","), // string → array
    };
    localStorage.setItem("customRecipes", JSON.stringify([...existing, newRecipe]));
    alert(" Recipe added successfully!");
    setRecipe({ name: "", description: "", ingredients: "", steps: "", image: "" });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4"> Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" value={recipe.name} onChange={handleChange} placeholder="Recipe Name" className="border px-4 py-2 rounded-lg" required />
        <input name="description" value={recipe.description} onChange={handleChange} placeholder="Short Description" className="border px-4 py-2 rounded-lg" required />
        <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} placeholder="Ingredients (comma separated)" className="border px-4 py-2 rounded-lg" required />
        <textarea name="steps" value={recipe.steps} onChange={handleChange} placeholder="Cooking Steps" className="border px-4 py-2 rounded-lg" required />
        <input name="image" value={recipe.image} onChange={handleChange} placeholder="Image URL" className="border px-4 py-2 rounded-lg" />
        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600">Add Recipe</button>
      </form>
    </div>
  );
}