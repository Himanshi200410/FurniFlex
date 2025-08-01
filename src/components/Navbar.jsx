import {ShoppingCart, Menu, X, User} from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import dummyItems from "../data/dummyItems";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const input = searchTerm.toLowerCase().trim();

    const categoryMatch = Object.keys(dummyItems).find((cat) =>
      cat.toLowerCase().includes(input)
    );

    if (categoryMatch) {
      navigate(`/category/${categoryMatch}`);
      return;
    }

    const itemMatch = Object.entries(dummyItems).find(([cat, items]) =>
      items.some((item) => item.name.toLowerCase().includes(input))
    );

    if (itemMatch) {
      navigate(`/category/${itemMatch[0]}`);
      return;
    }

    alert("No match found.");
  };

  const handleSuggestionClick = (category) => {
    setSearchTerm("");
    setSuggestions([]);
    navigate(`/category/${category}`);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    const lower = value.toLowerCase();
    const newSuggestions = [];

    Object.entries(dummyItems).forEach(([category, items]) => {
      if (category.toLowerCase().includes(lower)) {
        newSuggestions.push({ type: "category", value: category });
      }

      items.forEach((item) => {
        if (item.name.toLowerCase().includes(lower)) {
          newSuggestions.push({ type: "product", value: item.name, category });
        }
      });
    });

    setSuggestions(newSuggestions.slice(0, 8));
  };

  return (
    <div className="shadow-sm relative z-50">
      {/* Top Section */}
      <div className="flex justify-between items-center px-6 py-2 bg-white relative">
        {/* Logo */}
        <Link to="/" className="flex items-center hover:opacity-90 transition">
  <img src={logo} alt="logo" className="h-20 w-20 object-contain" />
  <span className="font-serif italic tracking-wider text-4xl text-[#332b4b] drop-shadow-lg cursor-pointer">
    FurniFlex
  </span>
</Link>


        {/* Desktop Search */}
        <div className="relative hidden md:block w-[550px] mx-8">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search Products, Color & More..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-900"
            >
              Search
            </button>
          </form>

          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-1 rounded shadow-md z-50 max-h-60 overflow-y-auto">
              {suggestions.map((s, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSuggestionClick(s.category || s.value)}
                  className="px-4 py-2 cursor-pointer hover:bg-purple-100 text-sm text-gray-700"
                >
                  {s.type === "category"
                    ? `🔍 Category: ${s.value}`
                    : `🪑 ${s.value}`}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6">
          
          <button className="flex items-center gap-5 hover:text-purple-800 focus:outline-none">
            <User size={20} />
         <Link to="/login">
  <button className="px-4 py-2 bg-green-800 text-white rounded">Login</button>
</Link>

<Link to="/register">
  <button className="px-4 py-2 bg-blue-800 text-white rounded">Register</button>
</Link>
          </button>
          {/* ✅ Cart Navigation Link */}
          <Link
            to="/cart"
            className="flex items-center gap-1 hover:text-purple-800 focus:outline-none"
          >
            <ShoppingCart size={20} />
            <span>Cart</span>
          </Link>
        </div>

        {/* 🔻 Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔻 Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search Products..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-900"
            >
              Go
            </button>
          </form>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <ul className="bg-white border border-gray-300 rounded shadow-md max-h-60 overflow-y-auto">
              {suggestions.map((s, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSuggestionClick(s.category || s.value)}
                  className="px-4 py-2 cursor-pointer hover:bg-purple-100 text-sm text-gray-700"
                >
                  {s.type === "category"
                    ? `🔍 Category: ${s.value}`
                    : `🪑 ${s.value}`}
                </li>
              ))}
            </ul>
          )}

          {/* Mobile Menu Items */}
          <div className="flex flex-col gap-4 text-gray-700 text-lg">
            <button className="flex items-center gap-2 hover:text-purple-800">
              <Heart size={20} /> Wishlist
            </button>
            <button className="flex items-center gap-2 hover:text-purple-800">
              <User size={20} /> Login / Register
            </button>
            {/* ✅ Cart Navigation Link */}
            <Link
              to="/cart"
              className="flex items-center gap-2 hover:text-purple-800"
              onClick={() => setIsMobileMenuOpen(false)} // Close drawer
            >
              <ShoppingCart size={20} /> Cart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
