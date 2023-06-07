import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Link to="/Home">
        <button>기본홈페이지</button>
      </Link>
      <Link to="/Login">
        <button>로그인</button>
      </Link>
      <Link to="/Nav">
        <button>네비게이션바</button>
      </Link>
      <Link to="/Weather">
        <button>날씨</button>
      </Link>
    </>
  );
};

export default Navigation;
