import { Link } from "react-router-dom";
import { useState } from "react";

function RecipeCard({ recipe, onFavorite }) {
  const [rating, setRating] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={recipe.image} alt={recipe.name} className="w-full h-40 object-cover" />

      <div className="p-4">
        <h2 className="text-lg font-bold">{recipe.name}</h2>
        <p className="text-gray-600">{recipe.desc}</p>

        
        <div className="flex space-x-1 my-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`cursor-pointer ${star <= rating ? "text-yellow-500" : "text-gray-400"}`}
            >
              ★
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-2">
          <Link to={`/recipe/${recipe.id}`} state={{ recipe }} className="text-orange-600 hover:underline">
            View Details
          </Link>
          <button
            onClick={() => onFavorite && onFavorite(recipe)}
            className="text-sm bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
          >
            ❤️ 
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
