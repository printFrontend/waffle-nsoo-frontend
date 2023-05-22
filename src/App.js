import React from "react";
import Weather from "./component/pages/weather";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Weather></Weather>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
