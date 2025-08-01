const featuredItems = [
  { image: "/src/assets/sofa2.jpg" },
  { image: "/src/assets/lamp.jpg" },
  { image: "/src/assets/shelf0.jpg" },
  { image: "/src/assets/plate1.jpg" },
  { image: "/src/assets/pot.jpg" },
  { image: "/src/assets/table1.png" },
  { image: "/src/assets/chair3.jpg" },
];

const FeaturedItems = () => {
  return (
    <>
    <div className="mt-5">
  <img
    src="/src/assets/banner.png" // 
    alt="Furniture Carnival Offer"
    className="w-full h-36 shadow-md"
  />
</div>
    
    <div className="px-6 pt-24 pb-12 bg-gray-50">
      {/* Section Heading */}
      <h2 className="text-4xl font-semibold font-sans text-center mb-8  text-gray-800 tracking-wide">
        New Arrivals
      </h2>

      {/* First row - 4 items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {featuredItems.slice(0, 4).map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <img
              src={item.image}
              alt={`furniture-${index}`}
              className="w-full h-64 object-cover rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Second row - 3 items centered */}
      <div className="flex justify-center gap-4">
        {featuredItems.slice(4).map((item, index) => (
          <div key={index + 4} className="group cursor-pointer w-full max-w-xs">
            <img
              src={item.image}
              alt={`furniture-${index + 4}`}
              className="w-full h-64 object-cover rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      {/* 🔹 View All Button */}
      <div className="flex justify-center mt-6">
        <button className="px-6 py-3 bg-purple-950 text-white font-semibold rounded-md hover:bg-purple-800 transition-all duration-300">
          View All →
        </button>
      </div>
    </div>
    </>
  );
};

export default FeaturedItems;
