import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome, <b>{user?.username}</b>! You are {user?.role === "ADMIN" ? "an Admin" : "a User"}.</p>
      <button onClick={logout}>Logout</button>
      {user?.role === "ADMIN" && (
        <div>
          <Link to="/admin/create-product">Add New Product</Link>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
