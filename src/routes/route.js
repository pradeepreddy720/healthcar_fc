import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  HomePage  from "../pages/home-page";
import PrivateRoute from './privateRoute';

export const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated]= useState(false);
  return (
    <Router> {/* Wrap the whole app with BrowserRouter */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<HomePage />} />
      <Route path="/register" element={<HomePage />} /> {/* Corrected typo */}
      <Route
          path="/test"
          element={<PrivateRoute element={<HomePage />} isAuthenticated={isAuthenticated} />}
        />
    </Routes>
  </Router>
  );
};