"use client";

import { useState } from "react";

export default function SearchComponent({ onClose }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    // Implement search logic here, for example, fetching data from Sanity
    console.log("Searching for:", query);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-4/5 max-w-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Search</h2>
          <button onClick={onClose} className="text-red-600">
            X
          </button>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full p-4 mt-4 border rounded-lg"
        />
        <button onClick={handleSearch} className="mt-4 bg-green-700 text-white py-2 px-4 rounded-full">
          Search
        </button>
      </div>
    </div>
  );
}
