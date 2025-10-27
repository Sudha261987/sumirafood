export default function SearchBar({ searchTerm, setSearchTerm, filterMeal, setFilterMeal }) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-3">
      {/* Text Search */}
      <input
        type="text"
        placeholder="Search recipe name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      {/* Meal Filter Dropdown */}
      <select
        value={filterMeal}
        onChange={(e) => setFilterMeal(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg w-48 focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        <option value="All">All Meals</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
        <option value="snack">Snacks</option>
      </select>
    </div>
  );
}