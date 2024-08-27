import React, { useEffect, useState } from "react";
import AuthorFilter from "./SidebarAuthorFilter";

const SidebarFilter = () => {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/publishers/")
      .then((response) => response.json())
      .then((data) => setPublishers(data))
      .catch((error) => console.error("Error fetching publishers:", error));
  }, []);

  return (
    <div className="bgThemeColor p-4">
      <div className="w-full rounded-lg bg-white p-4 shadow-lg">
        <h2 className="mb-3 text-lg font-bold text-gray-700">অনুসন্ধান</h2>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-gray-600">প্রকাশক:</h3>
          <div className="mb-4 h-48 overflow-y-auto rounded-lg border border-gray-200 p-2">
            {publishers.length > 0 ? (
              publishers.map((publisher) => (
                <label
                  className="mb-1 block flex items-center text-sm text-gray-700"
                  key={publisher.id}
                >
                  <input type="checkbox" className="mr-2" />
                  {publisher.name}
                </label>
              ))
            ) : (
              <p>Loading publishers...</p>
            )}
          </div>
          <AuthorFilter />
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
