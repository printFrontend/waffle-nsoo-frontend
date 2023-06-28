import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../component/Navigation/Header";
import Login from "../component/login";
import Nav from "../component/nav";
import Weather from "../component/weather";
import Home from "../component/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
