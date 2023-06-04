import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../component/Navigation/Navigation";
import Login from "../component/login";
import Nav from "../component/nav";
import Weather from "../component/weather";

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>기본페이지</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
