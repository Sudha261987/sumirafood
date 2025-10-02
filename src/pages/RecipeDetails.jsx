import { useLocation, useParams } from "react-router-dom";

function RecipeDetails() {
  const { state } = useLocation();
  const recipe = state?.recipe;

  if (!recipe) {
    return <p className="p-6">No recipe details found </p>;
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-full h-45 object-cover rounded mb-4" />
      <p className="text-gray-700 mb-4">{recipe.desc}</p>

      <h3 className="font-bold mt-4">Ingredients:</h3>
      <ul className="list-disc ml-6 mb-4">
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>

      <h3 className="font-bold mt-4">Instructions:</h3>
      <p className="mb-4">{recipe.instructions}</p>

      <h3 className="font-bold mt-4">Nutrition Info:</h3>
      <ul className="list-disc ml-6">
        <li>Calories: {recipe.nutrition.calories}</li>
        <li>Protein: {recipe.nutrition.protein}</li>
        <li>Fat: {recipe.nutrition.fat}</li>
        <li>Carbs: {recipe.nutrition.carbs}</li>
      </ul>
    </div>
  );
}

export default RecipeDetails;
