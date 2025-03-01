import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  HomePage  from "../pages/home-page";
import PrivateRoute from './privateRoute';
import UserDashboad from '../user/dashboard';
import UserGoals from '../user/user-goals';

export const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated]= useState(false);
  return (
    <Router> {/* Wrap the whole app with BrowserRouter */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<HomePage />} />
      <Route path="/register" element={<HomePage />} /> {/* Corrected typo */}
      <Route path="/user/dashboard" element={<UserDashboad />} /> {/* Corrected typo */}
      <Route path="/user/goals" element={<UserGoals />} />
      <Route
          path="/test"
          element={<PrivateRoute element={<HomePage />} isAuthenticated={isAuthenticated} />}
        />
    </Routes>
  </Router>
  );
};