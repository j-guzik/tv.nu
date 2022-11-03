import "./Filters.scss";

interface FiltersListProps {
  updateCategory: (name: string) => void;
  currentCategory: string;
}

const Filters = ({ updateCategory, currentCategory }: FiltersListProps) => {
  const CATEGORIES = ["movie,series", "movie", "series"];
  console.log("cc", currentCategory);

  return (
    <div className="filters">
      <div className="categories-container">
        <div className="categories-header">Categories:</div>
        <div className="categories">
          {CATEGORIES.map((category) => (
            <button
              key={category}
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
                <span>{category}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
