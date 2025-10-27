import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const [favourite, setFavourite] = useState(false);

  // Load favourite state when component mounts
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    const isFav = favs.some((r) => r.id === recipe.id);
    setFavourite(isFav);
  }, [recipe.id]);

  const toggleFavourite = () => {
    let favs = JSON.parse(localStorage.getItem("favourites")) || [];

    if (favourite) {
      // Remove from favourites
      favs = favs.filter((r) => r.id !== recipe.id);
      setFavourite(false);
    } else {
      // Add to favourites
      favs.push(recipe);
      setFavourite(true);
    }

    localStorage.setItem("favourites", JSON.stringify(favs));
  };

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden relative">
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-40 object-cover"
        />
      )}

      <button
        onClick={toggleFavourite}
        className={`absolute top-2 right-2 text-xl ${
          favourite ? "text-red-600" : "text-gray-400"
        }`}
      >
        ❤️
      </button>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{recipe.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{recipe.meal}</p>
        <p className="text-gray-500 text-sm line-clamp-2">
          {recipe.desc}
        </p>

        <Link
          to={'/recipe/${recipe.id}'}
          className="block text-center mt-4 bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}