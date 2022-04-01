import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Header = () => {
  const { setSearchTerm } = useGlobalContext();
  const cleanUp = () => {
    setSearchTerm("a");
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h2 className="nav-title" onClick={cleanUp}>
            The Cocktail DB
          </h2>
        </Link>
        <div className="nav-container">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <p className="home" onClick={cleanUp}>
              Home
            </p>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <p className="about">About</p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
