import React, { useState } from "react";
import { products } from "../components/DummyData/DummyData"; // Importing dummy data
import Header4 from "../components/Header/Header4";
import SortComponent from "../components/Others/SortComponent";
import ProductListing from "../components/Products/ProductListing";
import SidebarFilter from "../components/Sidebar/SidebarFilter";

const BookFair = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId],
    );
  };

  const filteredProducts = selectedCategories.length
    ? products.filter((product) =>
        selectedCategories.includes(product.category.id),
      )
    : products;

  return (
    <div className="bgMain py-8">
      <div className="mx-auto max-w-7xl p-4">
        <div className="">
          <Header4 />
        </div>
        <div className="flex flex-row ">
          <aside className="w-2/4 p-4 sm:w-2/4 md:w-2/4 lg:w-1/4  2xl:w-[600px]">
            <SidebarFilter
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
            />
          </aside>
          <main className="w-full p-4 lg:w-3/4 xl:w-3/4 2xl:w-auto">
            <div className="mb-4">
              <SortComponent productCount={filteredProducts.length} />
            </div>

            <ProductListing products={filteredProducts} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default BookFair;
