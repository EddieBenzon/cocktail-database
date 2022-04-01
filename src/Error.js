import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <p className="error-msg">Oops! That page doesn't exist..</p>
      <Link to="/">
        <button className="btn-home">Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
