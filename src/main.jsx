import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // ✅
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { Toaster } from 'react-hot-toast';
import ThemeProvider from './context/ThemeContext';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <ErrorBoundary>
    <BrowserRouter>
      <CartProvider>
        <Toaster position="top-right" reverseOrder={false} />
       <ThemeProvider>
      <App />
    </ThemeProvider>
      </CartProvider>
    </BrowserRouter>
  </ErrorBoundary>
</React.StrictMode>

);
