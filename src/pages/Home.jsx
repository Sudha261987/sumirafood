import { useState, useEffect } from "react";
import RecipeCard from "../assets/components/RecipeCard";
import SearchBar from "../assets/components/Searchbar";
import { recipesData } from "../data/Recipes";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMeal, setFilterMeal] = useState("All");
  const [favourites, setFavourites] = useState([]);

  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(saved);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const handleSearch = (term) => setSearchTerm(term.toLowerCase());
  const handleFilter = (meal) => setFilterMeal(meal);

  const toggleFavourite = (id) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((f) => f !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  };

  const filteredRecipes = recipesData.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm);
    const matchesMeal = filterMeal === "All" || r.meal === filterMeal;
    return matchesSearch && matchesMeal;
  });

  return (
    <div className="p-4 bg-orange-50 min-h-screen">
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <SearchBar onSearch={handleSearch} />
        <div className="flex gap-2">
          {["All", "Breakfast", "Lunch", "Dinner"].map((meal) => (
            <button
              key={meal}
              onClick={() => handleFilter(meal)}
              className={`px-3 py-1 rounded-full text-sm ${
                filterMeal === meal
                  ? "bg-orange-500 text-white"
                  : "bg-white border"
              }`}
            >
              {meal}
            </button>
          ))}
        </div>
      </div>

      {/* 🍲 Recipe Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavourite={favourites.includes(recipe.id)}
              toggleFavourite={toggleFavourite}
            />
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No recipes found 
          </p>
        )}
      </div>
    </div>
  );
}