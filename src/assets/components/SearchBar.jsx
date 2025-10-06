import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search recipe by name..."
      value={value}
      onChange={handleChange}
      className="w-full md:w-80 border p-2 rounded shadow-sm focus:outline-orange-400"
    />
  );
}