const BASE_URL = "https://66f1b77...mockapi.io/api/v1/recipes";

// ✅ Get all recipes
export const getRecipes = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error(`Server Error: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

// ✅ Get single recipe
export const getRecipeById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error(`Server Error: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching recipe by ID:", error);
    return null;
  }
};
