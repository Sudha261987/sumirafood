import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
  try {
    const res = await fetch('https://68fb930094ec960660268688.mockapi.io/recipes/recipe');
    if (!res.ok) throw new Error('Server error: ${res.status}');
    const data = await res.json();
    setRecipes(data);
  } catch (err) {
    console.error(err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

    fetchRecipes();
  }, []);

  const addToFavourites = (recipe) => {
    let favs = JSON.parse(localStorage.getItem('favourites')) || [];
    if (!favs.find(r => r.id === recipe.id)) {
      favs.push(recipe);
      localStorage.setItem('favourites', JSON.stringify(favs));
      alert('Recipe added to favourites!');
    } else {
      alert('Recipe already in favourites!');
    }
  };

  if (loading) return <p className="text-center mt-10">Loading recipes...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div key={recipe.id} className="border rounded shadow p-4 flex flex-col">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
            <p className="text-sm mb-4">{recipe.desc}</p>

            <div className="mt-auto flex justify-between gap-2">
              <Link
                to='/recipe-details' state={{recipe}}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center flex-1"
              >
                View Details
              </Link>
              <button
                onClick={() => addToFavourites(recipe)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex-1"
              >
                ❤️ Favourite
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;