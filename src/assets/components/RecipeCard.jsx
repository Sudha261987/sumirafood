import { Link } from "react-router-dom";
import { Star, Heart } from "lucide-react";

export default function RecipeCard({ recipe, isFavourite, toggleFavourite }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{recipe.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{recipe.meal}</p>

        {/* ⭐ Rating */}
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < recipe.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Link
            to={`/recipe/${recipe.id}`}
            className="bg-orange-500 text-white text-sm px-3 py-1 rounded hover:bg-orange-600"
          >
            View Details
          </Link>

          <button
            onClick={() => toggleFavourite(recipe.id)}
            className="p-1 rounded-full hover:bg-orange-100"
          >
            <Heart
              size={22}
              className={isFavourite ? "text-red-500 fill-red-500" : "text-gray-400"}
            />
          </button>
        </div>
      </div>
    </div>
  );
}