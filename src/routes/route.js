import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  HomePage  from "../pages/home-page";
import PrivateRoute from './privateRoute';
import UserDashboad from '../user/dashboard';
import UserGoals from '../user/user-goals';
import Layout from '../user/utils/layout';
import  HealthcareProvider  from "../pages/HealthcareProvider";

export const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated]= useState(false);
  return (
    <Router> {/* Wrap the whole app with BrowserRouter */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<HealthcareProvider />} />
        <Route path="/register" element={<HomePage />} /> 
        <Route path="/user" element={<Layout />}>
          <Route index element={<UserDashboad />} />
          <Route path="dashboard" element={<UserDashboad />} />
          <Route path="goals" element={<UserGoals />} />
        </Route>
        <Route
            path="/test"
            element={<PrivateRoute element={<HomePage />} isAuthenticated={isAuthenticated} />}
          />
      </Routes>
    </Router>
  );
};