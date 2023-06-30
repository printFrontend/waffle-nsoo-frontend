import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../component/Navigation/Header";
import Matching from "../component/pages/Matching";
import Schedule from "../component/pages/Schedule";
import Weather from "../component/pages/Weather";
import Home from "../component/pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Matching" element={<Matching />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
