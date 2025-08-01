import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅ Add this
import dummyItems from "../data/dummyItems"; // ✅ adjust the path as needed
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";




const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart(); // ✅ Use context

  const readableName = categoryName.replace(/-/g, " ");
  const items = dummyItems[categoryName] || [];

  const handleAddToCart = (item) => {
    addToCart(item); // ✅ Context method instead of localStorage
   
    toast.success(`${item.name} added to cart 🛒`);
    //navigate("/cart");

  };

  return (
    <div className="px-6 py-24">
      <h2 className="text-4xl font-bold mb-8 capitalize text-center">{readableName}</h2>

      {items.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <img src={item.image} alt={item.name} className="w-full h-80 object-cover rounded" />
              <h3 className="mt-4 font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-700 mt-2 mb-4 font-medium">₹{item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
