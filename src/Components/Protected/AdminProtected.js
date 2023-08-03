import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminProtected() {
  let isLoggedIn = localStorage.getItem("loginAdminAuth");
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}
