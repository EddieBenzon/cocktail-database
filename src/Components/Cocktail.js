import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id }) => {
  return (
    <div className="cocktail-grid-item" key={id}>
      <img src={image} alt={name} />
      <div className="btn-wrapper">
        <h3>{name}</h3>
        <Link to={`/cocktail/${id}`}>
          <button className="btn-details-grid">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
