import { useLocation, useNavigate } from 'react-router-dom';

const RecipeDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state?.recipe; 

  if (!recipe) {
    return (
      <div className="text-center mt-10">
        <p>Recipe not found</p>
        <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded mb-4" />
      <p><strong>Meal:</strong> {recipe.meal}</p>
      <p>{recipe.desc}</p>
      <h2 className="text-xl font-semibold mt-4">Ingredients:</h2>
      <p>{recipe.ingredients}</p>
      <h2 className="text-xl font-semibold mt-4">Instructions:</h2>
      <p>{recipe.instruction}</p>
      <h2 className="text-xl font-semibold mt-4">Nutrition:</h2>
      <h2>Nutrition</h2>
      <ul>
        <li>calories:{recipe.nutrition?.calories}</li>
        <li>:protein{recipe.nutrition?.protein}</li>
        <li>fat:{recipe.nutrition?.fat}</li>
        <li>carbs:{recipe.nutrition?.carbs}</li>
</ul>
    </div>
  );
};

export default RecipeDetails;