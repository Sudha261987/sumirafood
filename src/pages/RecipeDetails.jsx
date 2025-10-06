import { useParams, Link } from "react-router-dom";
import { recipesData } from "../data/Recipes";
import { ArrowLeft, Star } from "lucide-react";

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id == id);

  if (!recipe) {
    return (
      <div className="p-6 text-center text-gray-500">
        <p>Recipe not found 😢</p>
        <Link
          to="/"
          className="inline-block mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 p-4 md:p-8">
      {/* Back Button */}
      <Link
        to="/"
        className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium mb-4"
      >
        <ArrowLeft size={18} /> Back
      </Link>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl mx-auto">
        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover rounded-xl mb-4"
        />

        {/* Title + Rating */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-bold text-orange-700">{recipe.name}</h2>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={
                  i < (recipe.rating || 4)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
        </div>

        {/* Meal + Description */}
        <p className="text-sm text-gray-500 mb-1 italic">{recipe.meal}</p>
        {recipe.desc && <p className="text-gray-700 mb-5">{recipe.desc}</p>}

        {/* Ingredients */}
        {recipe.ingredients && Array.isArray(recipe.ingredients) && (
          <div className="mb-5">
            <h3 className="font-semibold text-lg mb-2 text-orange-600">
              🥕 Ingredients
            </h3>
            <ul className="list-disc pl-6 text-gray-700">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Instructions */}
        {recipe.instructions && Array.isArray(recipe.instructions) && (
          <div className="mb-5">
            <h3 className="font-semibold text-lg mb-2 text-orange-600">
              🍳 Instructions
            </h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-1">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        {/* Nutrition Info */}
        {recipe.nutrition && (
          <div>
            <h3 className="font-semibold text-lg mb-2 text-orange-600">
              🧡 Nutrition Info
            </h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Calories: {recipe.nutrition.calories}</li>
              <li>Protein: {recipe.nutrition.protein}</li>
              <li>Carbs: {recipe.nutrition.carbs}</li>
              <li>Fat: {recipe.nutrition.fat}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}