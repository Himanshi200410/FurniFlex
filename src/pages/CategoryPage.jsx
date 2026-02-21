import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import dummyItems from "../data/dummyItems"; // <-- Import your dummy data

const CategoryPage = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/products");
                setItems(response.data);
            } catch (err) {
                setError("Failed to fetch products.");
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filteredItems = items.filter(
        (item) => item.category && item.category.toLowerCase() === categoryName.toLowerCase()
    );

    // Fallback to dummy data if no backend items
    const fallbackItems = dummyItems[categoryName] || [];
    const displayItems = filteredItems.length > 0 ? filteredItems : fallbackItems;

    const readableName = categoryName.replace(/-/g, " ");

    const handleAddToCart = (item) => {
        addToCart(item);
        toast.success(`${item.name} added to cart 🛒`);
    };

    if (loading) {
        return <div className="px-6 py-24 text-center">Loading...</div>;
    }

    if (error) {
        return <div className="px-6 py-24 text-center text-red-500">{error}</div>;
    }

    return (
        <div className="px-6 py-24">
            <h2 className="text-4xl font-bold mb-8 capitalize text-center">
                {readableName}
            </h2>
            {displayItems.length === 0 ? (
                <p>No items found in this category.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {displayItems.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded shadow">
                            <img
                                src={item.imageUrl || item.image}
                                alt={item.name}
                                className="w-full h-80 object-cover rounded"
                                onError={e => { e.target.src = "https://via.placeholder.com/300x300?text=No+Image"; }}
                            />
                            <h3 className="mt-4 font-semibold text-lg">{item.name}</h3>
                            <p className="text-gray-700 mt-2 mb-4 font-medium">
                                ₹{item.price}
                            </p>
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