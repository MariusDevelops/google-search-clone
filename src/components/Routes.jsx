import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Results } from "./Results";

export const AllRoutes = () => (
  <div className="p-4">
    {/* <Navigate from="/" to="/search" /> */}
    <Routes>
      {/* <Route path="/" to="/search" /> */}
      <Route path="/" element={<Navigate to="/search" />} />
      <Route path="/search" element={<Results />} />
      <Route path="/images" element={<Results />} />
      <Route path="/news" element={<Results />} />
      <Route path="/videos" element={<Results />} />
    </Routes>
  </div>
);

// notes: 32:00

// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/lab" element={<Lab />} />
//     <Route path="*" element={<Navigate to="/" />} />
//   </Routes>
// </BrowserRouter>;
