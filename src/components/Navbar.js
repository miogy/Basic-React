import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <h1>logo</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="mypage">Mypage</Link>
      </nav>
    </>
  );
}

export default Navbar;
