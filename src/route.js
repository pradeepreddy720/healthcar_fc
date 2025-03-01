import React from "react";
import { Route, Routes } from "react-router-dom";
import  HomePage  from "./pages/home-page";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<HomePage />} />
      <Route path="/regestier" element={<HomePage />} />
    </Routes>
  );
};