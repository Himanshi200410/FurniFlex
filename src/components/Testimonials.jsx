// components/Testimonials.js
import React from "react";

const testimonials = [
  {
    name: "Priya R.",
    location: "Pune",
    rating: 5,
    quote: "The lounge chair exceeded my expectations! Beautiful design and super comfy.",
    avatar: "https://i.pravatar.cc/150?img=24",
  },
  {
    name: "Aman S.",
    location: "Delhi",
    rating: 4,
    quote: "Loved the coffee table. Matches perfectly with my decor!",
     avatar: "https://i.pravatar.cc/150?img=42",
    
  },
  {
    name: "Armaan K.",
    location: "Pune",
    rating: 4,
    quote: "Loved the lamp. Matches perfectly with my decor!",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Shekhar M.",
    location: "Nagpur",
    rating: 5,
    quote: "Loved the coffee table. Matches perfectly with my decor!",
     avatar: "https://i.pravatar.cc/150?img=63",
    
  },
  {
    name: "Virat K.",
    location: "Delhi",
    rating: 4,
    quote: "Loved the sofas. Matches perfectly with my decor!",
     avatar: "https://i.pravatar.cc/150?img=13",
    
  },
  {
    name: "Megha K.",
    location: "Bangalore",
    rating: 5,
    quote: "Smooth delivery, great quality. I’ll definitely shop here again!",
     avatar: "https://i.pravatar.cc/150?img=54",
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-1 text-yellow-500">
    {Array(count)
      .fill(0)
      .map((_, i) => (
        <span key={i}>★</span>
      ))}
    {Array(5 - count)
      .fill(0)
      .map((_, i) => (
        <span key={i}>☆</span>
      ))}
  </div>
);

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </div>
            <StarRating count={t.rating} />
            <p className="mt-3 text-gray-700 text-sm italic">"{t.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
