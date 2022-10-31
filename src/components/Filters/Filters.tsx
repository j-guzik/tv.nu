import { useState } from "react";
import "./Filters.scss";

interface FiltersListProps {
  updateCategory: (name: string) => void;
  currentCategory: string;
}

const Filters = ({ updateCategory, currentCategory }: FiltersListProps) => {
  const CATEGORIES = ["movie,series", "movie", "series"];
  console.log("cc", currentCategory);

  return (
    <div className="filter">
      <div className="categories-container">
        <div className="categories-header">Categories:</div>
        {CATEGORIES.map((category) => (
          <button
            className={`category ${
              currentCategory === category ? "selected" : ""
            }`}
            onClick={() => {
              updateCategory(category);
            }}
          >
            {category === "movie,series" ? (
              <span>All</span>
            ) : (
              <span>{category.toUpperCase()}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;