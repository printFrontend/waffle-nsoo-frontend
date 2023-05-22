import NavBar from "../pages/nav";
import Login from "../pages/Login";
import Weather from "../pages/weather";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Link to="/Login">
        <button>로그인</button>
      </Link>
      <Link to="/Nav">
        <button>네비게이션바</button>
      </Link>
      <Link to="/Weather">
        <button>날씨</button>
      </Link>
      <Routes>
        <Route path="/">기본페이지</Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Nav" element={<NavBar />}></Route>
        <Route path="/Weather" element={<Weather />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
