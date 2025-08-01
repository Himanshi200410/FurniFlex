import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";

const OrderConfirmed = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-green-600">🎉 Order Confirmed!</h1>
      <p className="mt-4">Thank you for shopping with FurniFlex.</p>
    </div>
  );
};

export default OrderConfirmed;
