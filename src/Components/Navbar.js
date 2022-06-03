import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { GoThreeBars, GoX } from "react-icons/go";
import { IconContext } from "react-icons";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
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
        <IconContext.Provider value={{ className: "hamburger-icon" }}>
          <div
            className="hamburger"
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          >
            {!hamburgerOpen && <GoThreeBars />}
            {hamburgerOpen && <GoX />}
          </div>
        </IconContext.Provider>
      </nav>
      {hamburgerOpen && (
        <section className="hamburger-open">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <p className="ham-element" onClick={cleanUp}>
              Home
            </p>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <p className="ham-element">About</p>
          </Link>
          <p className="ham-element">Contact</p>
        </section>
      )}
    </>
  );
};

export default Header;
