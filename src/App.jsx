import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import FeaturedItems from "./components/FeaturedItems";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";
import CartPage from './pages/CartPage';
import PaymentPage from "./pages/PaymentPage";
import OrderConfirmed from './pages/OrderConfirmed';
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const HomePage = () => (
  <>
    <Hero />
    <CategoryGrid />
    <FeaturedItems />
    <Testimonials />
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
         <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order-confirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  );
}

export default App;
