import { Search, Heart, ShoppingCart, User } from "lucide-react";
import logo from "../assets/logo.png"; // ✅ Check this path is correct!

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white">
      {/* Logo + Brand */}
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt="FurniFlex Logo"
          className="h-12 w-12 object-contain"
        />
        <h1 className="text-3xl font-bold text-purple-700 font-[Caveat]">
          FurniFlex
        </h1>
      </div>

      {/* Search Box */}
      <div className="mx-4 flex-grow max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search furniture..."
            className="w-[300px] py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <Heart className="text-gray-600 hover:text-purple-600 cursor-pointer" />
        <User className="text-gray-600 hover:text-purple-600 cursor-pointer" />
        <ShoppingCart className="text-gray-600 hover:text-purple-600 cursor-pointer" />
      </div>
    </header>
  );
}
