import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-16">
          <img
            src="src/assets/emptycart.png"
            alt="Empty cart"
            className="w-72 h-auto mb-6 opacity-90"
          />
          <p className="text-lg text-gray-600 mb-4">Oops! Your cart is empty!!!🥲</p>
          <Link
            to="/"
            className="text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded shadow"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-28 h-28 object-cover rounded-lg" />

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 text-xl"
                    >
                      −
                    </button>
                    <span className="px-3 text-lg">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 text-xl"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-6 text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-right">
            <h3 className="text-2xl font-semibold text-gray-800">Total: ₹{total}</h3>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={clearCart}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
              >
                Clear Cart
              </button>
              <Link
                to="/payment"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
              >
                Proceed to Pay
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
