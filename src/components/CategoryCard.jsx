
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.slug}`}>
      <div className="p-4 shadow rounded hover:bg-gray-100 cursor-pointer">
        <h3 className="text-xl font-semibold">{category.name}</h3>
      </div>
    </Link>
  );
}

export default CategoryCard;
