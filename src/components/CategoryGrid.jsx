import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Kitchen Storage", image: "/src/assets/storage.webp" },
  { name: "Coffee Table", image: "/src/assets/coffee.webp" },
  
  { name: "Pendant Lights", image: "/src/assets/lamp3.jpg" },
  { name: "Showpieces", image: "/src/assets/showpiece.webp" },
  { name: "Vase", image: "/src/assets/pot.jpg" },
  { name: "Side Table", image: "/src/assets/table1.png" },
  { name: "Lounge chair", image: "/src/assets/lounge.jpg" },
  
  { name: "Sofas", image: "/src/assets/sofa2.jpg" },
  { name: "Clocks", image: "/src/assets/clock.webp" },
  { name: "Dining Table", image: "/src/assets/dining.webp" },
  { name: "Bar Cabinet", image: "/src/assets/bar.jpg" },
   { name: "Decorative Mirrors", image: "/src/assets/mirror.jpg" },
 
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="py-12 px-4 md:px-12 bg-white">
      <h2 className="text-3xl font-bold mt-32 mb-12 text-center">
        Shop By Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center cursor-pointer"
            onClick={() => navigate(`/category/${slugify(cat.name)}`)}
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="mt-3 text-sm sm:text-base font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
