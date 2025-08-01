import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-6 md:px-20 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">FurniFlex</h2>
          <p className="text-gray-400">Furniture that fits your style and your space.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: support@furniflex.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Mumbai, India</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="#"><FaTwitter className="hover:text-sky-400" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-blue-600" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-gray-500 text-xs border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} FurniFlex. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
