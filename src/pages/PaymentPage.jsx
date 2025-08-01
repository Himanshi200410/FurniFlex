import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    setTimeout(() => {
      navigate("/order-confirmed");
    }, 2000); // 2 seconds delay for realism
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-green-600 mb-4">🧾 Payment Page</h1>
      <p className="text-gray-700 mb-6">Scan the QR or proceed to confirm your order.</p>

      <img src="/src/assets/scanner.jpg" alt="QR Code" className="w-48 h-48" />

      <button
        onClick={handleConfirm}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Confirm Payment
      </button>
    </div>
  );
};

export default PaymentPage;
